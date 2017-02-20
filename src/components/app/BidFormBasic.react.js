/**
    BidFormBasic.react.js

    @author:
      - Derek Johnston

    @desc:
      - A form from entering bids from a given set of participants and
        a selection of bid levels.
*/
import React, { Component } from "react";
import Form from "../html/Form.react";
import FormSubmit from "../html/FormSubmit.react"
import FormGroup from "../bootstrap/FormGroup.react";
import Col from "../bootstrap/Col.react";
import DataModel from "../../helpers/classes/DataModel";

class BidFormBasic extends Component {
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
      level: "2000"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
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

    const levelOptions = [
      {
        value: "2000",
        name: "$2,000"
      },
      {
        value: "1000",
        name: "$1,000"
      },
      {
        value: "500",
        name: "$500"
      },
      {
        value: "250",
        name: "$250"
      },
      {
        value: "100",
        name: "$100"
      },
      {
        value: "50",
        name: "$50"
      }
    ]

    return <Form id="bid-form-basic" onSubmit={this.handleSubmit} isInline={true}>
      <Col width="4">
        <FormGroup id="bid-form-participants" type="select" options={this.getBidders()} value={this.state.participant} onChange={this.handleParticipantChange} labelText="Participant:" />
      </Col>
      <Col width="3">
        <FormGroup id="bid-form-levels" type="select" options={levelOptions} value={this.state.level} onChange={this.handleLevelChange} labelText="Bid Level:" />
      </Col>
      <Col width="3">
        <FormSubmit value="Submit Bid" />
      </Col>
    </Form>
  }
}

export default BidFormBasic;
