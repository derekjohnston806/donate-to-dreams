/**
    EventSummaryItemData.react.js

    @author:
      - Derek Johnston

    @desc:
      - Present the data for a piece of event summary data.
*/
import React, { Component } from "react";
import Col from "../bootstrap/Col.react";
import P from "../html/P.react";

class EventSummaryItemData extends Component {
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
    return <Col width="6">
      <P text={this.props.data} />
    </Col>
  }
}

EventSummaryItemData.propTypes = {
  data: React.PropTypes.string.isRequired
};

export default EventSummaryItemData;
