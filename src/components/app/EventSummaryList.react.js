/**
    EventSummaryList.js

    @author:
      - Derek Johnston

    @desc:
      - Present a list of summary details for the user's event.
*/
import React, { Component } from "react";
import UL from "../html/UL.react";
import Row from "../bootstrap/Row.react";
import EventSummaryItem from "./EventSummaryItem.react";

class EventSummaryList extends Component {
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
    return <Row>
      <UL>
        <EventSummaryItem label="Event Name:" data="Donate to Dreams" />
        <EventSummaryItem label="Date:" data="02/24/2017" />
        <EventSummaryItem label="Location:" data="Scottish Rite Temple" />
        <EventSummaryItem label="Fundraising Goal:" data="$30,000" />
      </UL>
    </Row>
  }
}

export default EventSummaryList;
