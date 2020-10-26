import React, { FC } from "react";
import {connect} from "react-redux";
import {IAppState} from "../../models/IAppState";
import "./results.styles.scss";

type Props = IAppState & ReturnType<typeof mapStateToProps>;

const ResultsPage: FC<Props> = (props) => {
  return (
      <section className={"results-page"}>
        {props.results.map(result => (
            <div>
              <div>{result.name}</div>
              <div>{result.result} {result.units}</div>
              <div>{result.low_Normal} - {result.high_Normal}</div>
            </div>
        ))}
      </section>)
};

const mapStateToProps = (state: IAppState) => ({
  results: state.case.results
})

export default connect(mapStateToProps)(ResultsPage);
