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
import Button from "../bootstrap/Button.react";
import Row from "../bootstrap/Row.react";
import H1 from "../html/H1.react";
import HR from "../html/HR.react";
import Col from "../bootstrap/Col.react";
import EventSummaryList from "../app/EventSummaryList.react";
import ParticipantsTable from "../app/ParticipantsTable.react";
import NewParticipantModal from "../app/NewParticipantModal.react";
import ParticipantDetailsModal from "../app/ParticipantDetailsModal.react";
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
    this.handleParticipantUpdate = this.handleParticipantUpdate.bind(this);
    this.handleParticipantDelete = this.handleParticipantDelete.bind(this);
    this.handleStartEvent = this.handleStartEvent.bind(this);
  }

  /**
    handleStartEvent()

    @desc:
      - Navigate to the EventRunner scene.

    @param:
      - null

    @return:
      - null
  */
  handleStartEvent() {
    console.log("Starting event...");
    console.log(this.props);
    this.props.router.push("runEvent");
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
    handleParticipantUpdate(participantID)

    @desc:
      - Given the participantID, update the data model object.

    @param:
      - participantID (String): The ID for the participant.

    @return:
      - null
  */
  handleParticipantUpdate(participantID) {
    const participantData = {
      number: $("#participant-details-number").val(),
      name: $("#participant-details-name").val(),
      note: $("#participant-details-note").val()
    };
    console.log("Updating data:", participantData);
    this.state.dataModel.refresh();
    this.state.dataModel.updateParticipant(participantData);
    this.setState({
      dataModel: this.state.dataModel
    });
  }

  /**
    handleParticipantDelete(participantID)

    @desc:
      - Remove a participant from the database.

    @param:
      - null

    @return:
      - null
  */
  handleParticipantDelete() {
    this.state.dataModel.refresh();
    this.state.dataModel.deleteParticipantWithID(this.state.dataModel.data.editingParticipantID);
    this.setState({
      dataModel: this.state.dataModel
    });
    $("#participant-details-modal").modal("hide");
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
      <Row>
        <Col width="10">
          <H1 text="Event Summary" />
        </Col>
        <Col width="2" style={{paddingTop: "24px"}}>
          <Button style="success" text="Start Event" onClick={this.handleStartEvent} />
        </Col>
      </Row>
      <HR />
      <EventSummaryList data={this.state.dataModel.data.summary}/>
      <HR />
      <ParticipantsTable data={this.state.dataModel.data.participants} />
      <NewParticipantModal onSubmit={this.handleNewParticipantSubmit} />
      <ParticipantDetailsModal onSubmit={this.handleParticipantUpdate} onDelete={this.handleParticipantDelete} />
    </Container>
  }
}

export default EventSummary;
