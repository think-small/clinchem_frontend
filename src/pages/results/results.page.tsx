import React, { FC } from "react";
import {connect} from "react-redux";
import {IAppState} from "../../models/IAppState";
import "./results.styles.scss";

type Props = IAppState & ReturnType<typeof mapStateToProps>;

const ResultsPage: FC<Props> = (props) => {
  return (
      <section className={"results-page"}>
            <table>
                <thead>
                    <tr>
                        <th>Test</th>
                        <th>Result</th>
                        <th>Units</th>
                        <th>Reference Range</th>
                    </tr>
                </thead>
                <tbody>
                        {props.results.map(({name, result, units, low_Normal, high_Normal}) => (
                            <tr>
                                <td>{ name.replaceAll("_", " ") }</td>
                                <td>{ result }</td>
                                <td>{ units }</td>
                                <td>{ low_Normal } - { high_Normal }</td>
                            </tr>
                        ))}
                </tbody>
            </table>
      </section>)
};

const mapStateToProps = (state: IAppState) => ({
  results: state.case.results
})

export default connect(mapStateToProps)(ResultsPage);
