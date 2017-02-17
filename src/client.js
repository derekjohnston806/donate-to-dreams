/**
    client.js

    @author:
      - Derek Johnston

    @desc:
      - The primary endpoint for the web application.
*/
import React from "react";
import ReactDOM from "react-dom";

import EventSummary from "./components/scenes/EventSummary.react";

const Application = () => {
  return <EventSummary />
};

ReactDOM.render(<Application />, document.getElementById("render-target"));
