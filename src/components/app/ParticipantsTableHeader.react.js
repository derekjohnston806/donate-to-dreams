/**
    ParticipantsTableHeader.react.js

    @author:
      - Derek Johnston

    @desc:
      - A header for the table with buttons to import a spreadsheet or
        to manually add a participant.
*/
import React, { Component } from "react";
import H2 from "../html/H2.react";
import Row from "../bootstrap/Row.react";
import Col from "../bootstrap/Col.react";
import Button from "../bootstrap/Button.react";

class ParticipantsTableHeader extends Component {
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

    this.presentNewParticipantModal = this.presentNewParticipantModal.bind(this);
  }

  /**
    presentNewParticipantModal()

    @desc:
      - Show the new particpant modal to the user.

    @param:
      - null

    @return:
      - null
  */
  presentNewParticipantModal() {
    $("#new-participant-modal").modal("show");
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
    return <Row style={{ marginBottom: "18px", padding: "14px 0px" }}>
      <Col width="6">
        <H2 text="Event Participants" style={{ margin: "0" }}/>
      </Col>
      <Col width="3">
        <Button style="success" text="Import Spreadsheet" onClick={()=>{}} />
      </Col>
      <Col width="3">
        <Button style="info" text="Add Participant" onClick={this.presentNewParticipantModal}  />
      </Col>
    </Row>
  }
}

export default ParticipantsTableHeader;
