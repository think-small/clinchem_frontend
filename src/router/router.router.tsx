import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar.component";
import DashboardPage from "../pages/dashboard/dashboard.page";
import NotesPage from "../pages/notes/notes.page";
import HistoryPage from "../pages/history/history.page";
import TestPage from "../pages/test/test.page";
import ResultsPage from "../pages/results/results.page";
import AssessmentPage from "../pages/assessment/assessment.page";
import NotFoundPage from "../pages/not-found/not-found.page";
import "./router.styles.scss";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/notes" component={NotesPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/tests" component={TestPage} />
            <Route path="/results" component={ResultsPage} />
            <Route path="/assessment" component={AssessmentPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
