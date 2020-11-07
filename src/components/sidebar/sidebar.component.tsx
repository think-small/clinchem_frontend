import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button, Checkbox } from "react-materialize";
import "materialize-css";
import "./sidebar.styles.scss";
import { ReactComponent as Clipboard } from "../../assets/zondicons/clipboard.svg";
import { ReactComponent as Stethoscope } from "../../assets/zondicons/stethoscope.svg";
import { ReactComponent as Folder } from "../../assets/zondicons/folder-outline-add.svg";
import { ReactComponent as Chart } from "../../assets/zondicons/chart-bar.svg";
import { ReactComponent as Test } from "../../assets/zondicons/calculator.svg";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <section className="case-selector">
          <Modal
              actions={[
                  <Button flat modal="close" node="button" waves="green">Close</Button>
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Unit Selection"
              id="Modal-0"
              open={false}
              options={{
                  dismissible: true,
                  endingTop: '10%',
                  inDuration: 250,
                  opacity: 0.5,
                  outDuration: 250,
                  preventScrolling: true,
                  startingTop: '4%'
              }}
              trigger={<Button node="button">Select Unit</Button>}
          >
              <p>
                  Select the units you wish to review
              </p>
              <form>
                  <div className="unit-selection-group">
                      <Checkbox value={"OsmoAndLytes"} label={"Osmolality and Electrolytes"} />
                      <Checkbox value={"Renal"} label={"Renal Function"} />
                      <Checkbox value={"Lipids"} label={"Lipid Metabolism"} />
                      <Checkbox value={"HIVAndHepatitis"} label={"HIV and Viral Hepatitis"} />
                      <Checkbox value={"Enzymes"} label={"Enzymes"} />
                  </div>
              </form>
          </Modal>
      </section>
      <NavLink className="sidebar-item" to="/notes" activeClassName="isActive">
        <span>Transcriptions</span>
        <Clipboard className="sidebar-item-icon" />
      </NavLink>
      <NavLink className="sidebar-item" to="history" activeClassName="isActive">
        <span>History</span> <Folder className="sidebar-item-icon" />
      </NavLink>
      <NavLink className="sidebar-item" to="tests" activeClassName="isActive">
        Order Tests <Test className="sidebar-item-icon" />
      </NavLink>
      <NavLink className="sidebar-item" to="results" activeClassName="isActive">
        Results <Chart className="sidebar-item-icon" />
      </NavLink>
      <NavLink
        className="sidebar-item"
        to="assessment"
        activeClassName="isActive"
      >
        Diagnosis <Stethoscope className="sidebar-item-icon" />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
