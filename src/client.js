/**
    client.js

    @author:
      - Derek Johnston

    @desc:
      - The primary endpoint for the web application.
*/
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import EventSummary from "./components/scenes/EventSummary.react";

const Application = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={EventSummary} />
  </Router>
};

ReactDOM.render(<Application />, document.getElementById("render-target"));
