import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// las rutas hijas no llevan el tag router
export default function AppRouter() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/login" component={LoginScreen}/> es la version original*/}
          <PublicRoute
            exact
            path="/login" 
            component={LoginScreen}
            isAuthenticated={user.logged}/>

          <PrivateRoute 
            path="/" 
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />

        </Switch>
      </div>
    </Router>
  );
}