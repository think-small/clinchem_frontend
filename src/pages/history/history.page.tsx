import React, { FC } from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { IAppState } from "../../models/IAppState";
import { IHistory } from "../../models/IHistory";
import { apiCaller } from "../../Utils/apiCaller";
import {Dispatch} from "redux";
import {setHistoriesActionCreator} from "../../store/actions/action-creators/setHistories";

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const HistoryPage : FC<Props> = ({ history, addHistoryToStore }) => {

  useEffect(() => {
    if (history.length == 0) {
      apiCaller<IHistory>(`${process.env.REACT_APP_HISTORY_API}/1`)
          .then(h => addHistoryToStore(h));
    }
  },[]);

  if (Array.isArray(history)) {
    return (
        <section>
          <table>
            <thead>
              <tr>
                <th>Diagnosis</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>
              {
                history.map(h => (
                    <tr key={uuidv4()}>
                      <td>{h.diagnosis}</td>
                      <td>{h.timestamp}</td>
                      <td>{h.notes}</td>
                      <td>{h.reference_Name} - {h.reference}</td>
                    </tr>
                ))
              }
            </tbody>
          </table>
        </section>
    )
  }
  else {
    return (
        <section>History</section>
    )
  }
};

const mapStateToProps = (store: IAppState) => ({
  history: store.case.history,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addHistoryToStore: (histories: IHistory | IHistory[]) => dispatch(setHistoriesActionCreator(histories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
