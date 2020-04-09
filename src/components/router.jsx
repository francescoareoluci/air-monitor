import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import ScrollToTop from "./scroll_to_top";

import Home from "../components/home"
import DeviceInfo from "../components/device_info"
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    {/*<CSSTransition key={location.key} classNames="slide" timeout={500}>*/}
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/deviceInfo" component={DeviceInfo} />
      </Switch>
    {/*</CSSTransition>*/}
  </TransitionGroup>
));

export default function App() {
  return (
    <Router>
      {/*
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/deviceInfo">DeviceInfo</Link>
            </li>
          </ul>
        </nav>
      </div>
      */}
      <ScrollToTop>
        <AnimatedSwitch />
      </ScrollToTop>
    </Router>
  );
}