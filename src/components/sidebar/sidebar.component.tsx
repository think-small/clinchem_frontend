import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-materialize";
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
        <Button node="button" waves="light" className="case-selector-button">
          Select Unit
        </Button>
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
