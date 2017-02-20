/**
    BidForms.react.js

    @author:
      - Derek Johnston

    @desc:
      - A set of forms for entering in bid information.
*/
import React, { Component } from "react";
import HR from "../html/HR.react";
import Row from "../bootstrap/Row.react";
import BidFormBasic from "./BidFormBasic.react";
import BidFormCustomLevel from "./BidFormCustomLevel.react";
import BidFormNewParticipant from "./BidFormNewParticipant.react";
import DataModel from "../../helpers/classes/DataModel";

class BidForms extends Component {
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

    this.handleBidSubmit = this.handleBidSubmit.bind(this);
    this.handleNewParticipantBidSubmit = this.handleNewParticipantBidSubmit.bind(this);
    this.submitBidForParticipant = this.submitBidForParticipant.bind(this);
  }

  /**
    submitBidForParticipant(bid)

    @desc:
      - Save a new bid in the data model.

    @param:
      - bid (Object): The bid data object.

    @return:
      - null
  */
  submitBidForParticipant(bid) {
    console.log("Submitting new bid");
    console.log(bid);

    let dataModel = new DataModel();

    dataModel.newBidForParticipant({
      number: bid.participant,
      amount: bid.level
    });

    this.props.didUpdate();
  }

  /**
    handleBidSubmit(bid)

    @desc:
      - Handle the submission of a new bid.

    @param:
      - bid (Object): The bid data from the submission form.

    @return:
      - null
  */
  handleBidSubmit(bid) {
    this.submitBidForParticipant(bid);
  }

  /**
    handleNewParticipantBidSubmit(bid)

    @desc:
      - Handle a bid coming from a not previously registered participant.

    @param:
      - bid (Object): This bid data object.

    @return:
      - null
  */
  handleNewParticipantBidSubmit(bid) {
    let dataModel = new DataModel();
    let number = dataModel.createNewParticipant(bid.participant);
    let newBid = {
      participant: number,
      level: bid.level
    };

    this.submitBidForParticipant(newBid);
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
    return <Row>
      <Row>
        <BidFormBasic onSubmit={this.handleBidSubmit} />
      </Row>
      <HR />
      <Row>
        <BidFormCustomLevel onSubmit={this.handleBidSubmit} />
      </Row>
      <HR />
      <Row>
        <BidFormNewParticipant onSubmit={this.handleNewParticipantBidSubmit} />
      </Row>
      <HR />
    </Row>
  }
}

export default BidForms;
