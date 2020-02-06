
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

// import AdminLayout from "layouts/Admin.jsx";
import CpanelComp from "views/CpanelComp.jsx";
import LoginComp from "views/LoginComp.jsx";
import { Provider } from "react-redux";
import store from "redux/employee/store";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path='/Login' component={LoginComp} />
      <Route path='/Home' component={CpanelComp} />
      <Redirect from="/" to="/login" />
      {/* <Redirect from="/" to="/Home" /> */}
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
