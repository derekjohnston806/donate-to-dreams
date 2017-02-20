/**
    BidFormCustomLevel.react.js

    @author:
      - Derek Johnston

    @desc:
      - Place a bid for an existing participant with a custom level.
*/
import React, { Component } from "react";
import Form from "../html/Form.react";
import FormSubmit from "../html/FormSubmit.react";
import FormGroup from "../bootstrap/FormGroup.react";
import Col from "../bootstrap/Col.react";
import DataModel from "../../helpers/classes/DataModel";

class BidFormCustomLevel extends Component {
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
      participant: "1",
      level: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.getBidders = this.getBidders.bind(this);
  }

  /**
    getBidders()

    @desc:
      - Fetch the participants from the data model and create an options array.

    @param:
      -  null

    @return:
      - (Array) An array of bidder options.
  */
  getBidders() {
    let dataModel = new DataModel();
    let participants = dataModel.data.participants;
    let bidders = [];
    for (let key in participants) {
      let participant = participants[key];
      let bidder = {
        value: participant.number,
        name: participant.number + " - " + participant.name
      };
      bidders.push(bidder);
    }
    return bidders;
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

    const testOptions = [
      {
        value: "1",
        name: "1 : Derek Johnston"
      },
      {
        value: "2",
        name: "2 : Kaylee Holloway"
      }
    ];

    return <Form id="bid-form-custom-level" onSubmit={this.handleSubmit} isInline={true} >
      <Col width="4">
        <FormGroup id="bid-form-custom-level-participant" type="select" options={this.getBidders()} value={this.state.participant} onChange={this.handleParticipantChange} labelText="Participant:" />
      </Col>
      <Col width="3">
        <FormGroup id="bid-form-custom-level-level" value={this.state.level} onChange={this.handleLevelChange} labelText="Bid Value:" />
      </Col>
      <Col width="3">
        <FormSubmit value="Submit Bid"></FormSubmit>
      </Col>
    </Form>
  }
}

export default BidFormCustomLevel;
