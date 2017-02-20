/**
    BidFormNewParticipant.react.js

    @author:
      - Derek Johnston

    @desc:
      - Submit a bid for a participant who was not previously registered.
*/
import React, { Component } from "react";
import Form from "../html/Form.react";
import FormSubmit from "../html/FormSubmit.react";
import FormGroup from "../bootstrap/FormGroup.react";
import Col from "../bootstrap/Col.react";

class BidFormNewParticipant extends Component {
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

    this.state = {
      participant: "",
      level: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
  }

  /**
    handleSubmit()

    @desc:
      - Submit a new bid.

    @param:
      - null

    @return:
      - null
  */
  handleSubmit() {
    this.props.onSubmit(this.state);
  }

  /**
    handleParticipantChange(participant)

    @desc:
      - Update the participant value in the state.

    @param:
      - participant

    @return:
      - null
  */
  handleParticipantChange(participant) {
    this.setState({
      participant: participant
    });
  }

  /**
    handleLevelChange(level)

    @desc:
      - Update the component's state when a new level is selected.

    @param:
      - level (String): The newly selected level.

    @return:
      - null
  */
  handleLevelChange(level) {
    this.setState({
      level: level
    });
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
    return <Form id="bid-form-new-participant" onSubmit={this.handleSubmit} isInline={true}>
      <Col width="4">
        <FormGroup id="bid-form-new-participant-participant" value={this.state.participant} onChange={this.handleParticipantChange} labelText="Participant Name:" />
      </Col>
      <Col width="3">
        <FormGroup id="bid-form-new-participant-level" value={this.state.level} onChange={this.handleLevelChange} labelText="Bid Level:" />
      </Col>
      <Col width="3">
        <FormSubmit value="Submit Bid" />
      </Col>
    </Form>
  }
}

export default BidFormNewParticipant;
