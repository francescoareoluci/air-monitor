import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ScrollToTop from "./scroll_to_top";
import Home from "./home"
import DeviceInfo from "./device_info"


export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/deviceInfo" component={DeviceInfo} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}