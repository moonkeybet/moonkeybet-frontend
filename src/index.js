import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SuccessLoginPage from "views/SuccessLoginPage/SuccessLoginPage.js";

import LogoutPage from "views/LogoutPage/LogoutPage.js";

import RegisterPage from "views/RegisterPage/RegisterPage.js";
import HomePage from "views/HomePage/HomePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/sucessLogin" component={SuccessLoginPage} />

      <Route path="/register" component={RegisterPage} />
      <Route path="/compoenents" component={Components} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
