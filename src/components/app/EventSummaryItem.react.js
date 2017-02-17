/**
    EventSummaryItem.js

    @author:
      - Derek Johnston

    @desc:
      - Show a piece of summary data for the event.
*/
import React, { Component } from "react";
import LI from "../html/LI.react";
import Row from "../bootstrap/Row.react";
import EventSummaryItemLabel from "./EventSummaryItemLabel.react";
import EventSummaryItemData from "./EventSummaryItemData.react";

class EventSummaryItem extends Component {
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
    return <LI>
      <Row>
        <EventSummaryItemLabel text={this.props.label} />
        <EventSummaryItemData data={this.props.data} />
      </Row>
    </LI>
  }
}

EventSummaryItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  data: React.PropTypes.string.isRequired
};

export default EventSummaryItem;
