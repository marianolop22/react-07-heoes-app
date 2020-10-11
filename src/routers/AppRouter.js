import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

// las rutas hijas no llevan el tag router
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route path="/" component={DashboardRoutes}/>
        </Switch>
      </div>
    </Router>
  );
}