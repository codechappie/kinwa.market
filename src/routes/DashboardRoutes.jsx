import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
// import CheckingPage from "../pages/CheckingPage";
import ShopCategoryPage from "../pages/ShopCategoryPage";
import ShopPage from "../pages/ShopPage";
const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ShopPage} />
        <Route exact path="/categoria/:category" component={ShopCategoryPage} />
        {/* <Route exact path="/finalizar" component={CheckingPage} /> */}

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default DashboardRoutes;
