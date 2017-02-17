/**
    EventSummary.js

    @author:
      - Derek Johnston

    @desc:
      - A scene component for presenting summary details of the
        event to the user.
*/
import React, { Component } from "react";
import Container from "../bootstrap/Container.react";
import Row from "../bootstrap/Row.react";
import H1 from "../html/H1.react";
import HR from "../html/HR.react";
import EventSummaryList from "../app/EventSummaryList.react";
import ParticipantsTable from "../app/ParticipantsTable.react";
import NewParticipantModal from "../app/NewParticipantModal.react";
import DataModel from "../../helpers/classes/DataModel";

class EventSummary extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of this class.

    @param:
      - props (Object): The component's properties passed in by the parent.

    @return:
      - A new class object.
  */
  constructor(props) {
    super(props);

    const dataModel = new DataModel();

    this.state = {
      dataModel: dataModel
    };

    this.handleNewParticipantSubmit = this.handleNewParticipantSubmit.bind(this);
  }

  /**
    handleNewParticipantSubmit()

    @desc:
      - Update the data model following a new participant storage event.

    @param:
      - null

    @return:
      - null
  */
  handleNewParticipantSubmit() {
    this.state.dataModel.refresh();
    this.setState({
      dataModel: this.state.dataModel
    })
  }

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
    console.log(this.state.dataModel);
    return <Container>
      <H1 text="Event Summary" />
      <HR />
      <EventSummaryList data={this.state.dataModel.data.summary}/>
      <HR />
      <ParticipantsTable data={this.state.dataModel.data.participants} />
      <NewParticipantModal onSubmit={this.handleNewParticipantSubmit} />
    </Container>
  }
}

export default EventSummary;
