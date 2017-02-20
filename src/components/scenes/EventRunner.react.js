/**
    EventRunner.react.js

    @author:
      - Derek Johnston

    @desc:
      - The main interface for running the event.
*/
import React, { Component } from "react";
import Container from "../bootstrap/Container.react";
import Row from "../bootstrap/Row.react";
import Col from "../bootstrap/Col.react";
import Button from "../bootstrap/Button.react";
import H1 from "../html/H1.react";
import HR from "../html/HR.react";
import GoalProgress from "../app/GoalProgress.react";
import BidForms from "../app/BidForms.react";
import BidsTable from "../app/BidsTable.react";
import DataModel from "../../helpers/classes/DataModel"

class EventRunner extends Component {
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

    let dataModel = new DataModel()
    console.log("EventRunner constructor:", dataModel.data);
    this.state = {
      bids: dataModel.data.bids,
      raised: dataModel.data.raised
    };

    this.handleBidUpdate = this.handleBidUpdate.bind(this);
  }

  /**
    handleBidUpdate()

    @desc:
      - Update the bids array when a form registers an update.

    @param:
      - null

    @return:
      - null
  */
  handleBidUpdate() {
    let dataModel = new DataModel()
    this.setState({
      bids: dataModel.data.bids,
      raised: dataModel.data.raised
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
    return <Container>
      <Row>
        <Col width="10">
          <H1 text="Donate to Dreams" />
        </Col>
        <Col width="2" style={{paddingTop: "24px"}}>
          <Button style="success" text="Display Event" onClick={()=>{}} />
        </Col>
      </Row>
      <HR />
      <GoalProgress raised={this.state.raised} />
      <HR />
      <BidForms didUpdate={this.handleBidUpdate} />
      <BidsTable bids={this.state.bids} raised={this.state.raised} />
    </Container>
  }
}

export default EventRunner;
