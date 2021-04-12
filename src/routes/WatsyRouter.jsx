import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// import LandingPage from "../pages/LandingPage";
// import LoginPage from "../pages/LoginPage";
import DashboardRoutes from "./DashboardRoutes";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const WatsyRouter = () => {

  return (
    <Router>
      <Switch>
        {/* <PublicRoute
          isAuthenticated={false}
          exact
          path="/inicio"
          component={LandingPage}
        />
        <PublicRoute
          isAuthenticated={false}
          exact
          path="/ingresar"
          component={LoginPage}
        /> */}
        <PublicRoute
          isAuthenticated={false}
          path="/"
          component={DashboardRoutes}
        />
        {/* <PrivateRoute
          isAuthenticated={true}
          path="/"
          component={DashboardRoutes}
        /> */}

        <Redirect to="/inicio" />
      </Switch>
    </Router>
  );
};

export default WatsyRouter;
