import React, {FC, useState, useEffect, MouseEventHandler} from "react";
import { Autocomplete } from "react-materialize";
import {IResult} from "../../models/IResult";
import {apiCaller} from "../../Utils/apiCaller";
import {IAppState} from "../../models/IAppState";
import OrderEntry from "../../components/OrderEntry/order-entry.component";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setResultActionCreator} from "../../store/actions/action-creators/setResult";

const panelOrders = ['BMP', 'HFT', 'CMP', 'RENAL_PANEL', 'LIPID_PANEL', 'IRON_PANEL'];
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const TestPage:FC<Props> = (props) => {
  const [testToOrder, setTestToOrder] = useState<string>("");
  const [doesTestExist, setDoesTestExist] = useState<Boolean | Boolean[]>();
  const [isDuplicateOrder, setIsDuplicateOrder] = useState<Boolean>(true);

    const handleClick = (str: string) => {
        setTestToOrder(str.replaceAll(' ', '_'));
    }

    const getTestResult = async () => {
        let result: IResult | IResult[];
        const orderName = testToOrder?.toUpperCase().replace(" ", "_");
        const isPanelOrder = panelOrders.includes(orderName ?? "");

        if (orderName && isPanelOrder)
            result = await apiCaller<IResult>(`${process.env.REACT_APP_RESULTS_PANEL_API}/${orderName}`);
        else if (orderName && !isPanelOrder)
            result = await apiCaller<IResult>(`${process.env.REACT_APP_RESULTS_API}/${orderName}`);
        else
            result = {name: "", result: "", high_Normal: "", low_Normal: "", units: ""};

        props.postResult(result);
    }

    const checkIfTestExists = async () => {
        if (testToOrder == "")
            return setDoesTestExist(false);
        else {
            const testExistenceStatus = await apiCaller<Boolean>(`${process.env.REACT_APP_TEST_EXIST_API}/${testToOrder}`);
            setDoesTestExist(testExistenceStatus);
        }
    }

    const checkIfDuplicateOrder = () => {
        for (let i = 0; i < props.results.length; i++)
        {
            if (testToOrder.toUpperCase().replaceAll(" ", "_") == props.results[i].name.toUpperCase().replaceAll(" ", "_"))
            {
                return setIsDuplicateOrder(true);
            }
        }
        setIsDuplicateOrder(false);
    }

  useEffect(() => {
      checkIfTestExists();
      checkIfDuplicateOrder();
      if (doesTestExist && !isDuplicateOrder)
          getTestResult();
  }, [testToOrder, doesTestExist]);

  return (
      <section>
        <OrderEntry onClick={handleClick}/>
      </section>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        postResult: (res: IResult | IResult[]) => dispatch(setResultActionCreator(res))
    };
}

const mapStateToProps = (store: IAppState) => ({
  results: store.case.results
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);