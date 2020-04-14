import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./scroll_to_top";

import Home from "../components/home"
import DeviceInfo from "../components/device_info"


export default function App() {
  return (
    <Router basename="/air-monitor">
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/deviceInfo" component={DeviceInfo} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}