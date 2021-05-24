import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import Survey from "./Survey";
import Meeting from "./Meeting";
import Directory from "./Directory";
// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <>
        <Sidebar />
        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};
export default () => (
  <Switch>
    {/* Setting the routing for the menu pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Survey.path} component={Survey} />
    <RouteWithSidebar exact path={Routes.Meeting.path} component={Meeting} />
    <RouteWithSidebar exact path={Routes.Directory.path} component={Directory} />
    
  </Switch>
);
