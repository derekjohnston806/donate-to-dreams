/**
    EventSummaryItemLabel.js

    @author:
      - Derek Johnston

    @desc:
      - Present a <strong> label for a piece of event data.
*/
import React, { Component } from "react";
import Col from "../bootstrap/Col.react";
import Strong from "../html/Strong.react";

class EventSummaryItemLabel extends Component {
  /**
    render()

    @desc:
      - Update the component in the DOM.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <Col width="2">
      <Strong text={this.props.text} />
    </Col>
  }
}

EventSummaryItemLabel.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default EventSummaryItemLabel;
