/**
    ParticipantDetailsForm.react.js

    @author:
      - Derek Johnston

    @desc:
      - Let the user view/edit/delete participant information.
*/
import React, { Component } from "react";
import Form from "../html/Form.react";
import FormGroup from "../bootstrap/FormGroup.react";
import DataModel from "../../helpers/classes/DataModel";

class ParticipantDetailsForm extends Component {
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
      number: $("#participant-details-number").val() || "",
      name: $("#participant-details-name").val() || "",
      note: $("#participant-details-note").val() || ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
    handleChange()

    @desc:
      - Update the state with the new values

    @param:
      - null

    @return:
      - null
  */
  handleChange() {
    this.setState({
      number: $("#participant-details-number").val(),
      name: $("#participant-details-name").val(),
      note: $("#participant-details-note").val()
    });
  }

  /**
    handleSubmit()

    @desc:
      - Handle a form submission event.

    @param:
      - null

    @return:
      - null
  */
  handleSubmit() {
    console.log("Saving participant information...");
    this.props.onSubmit(this.props.participantID);
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
    return <Form id="participant-details-form" onSubmit={this.handleSubmit}>
      <FormGroup id="participant-details-number" labelText="Bid Number" value={this.state.number} onChange={this.handleChange} placeholder="Bid Number" />
      <FormGroup id="participant-details-name" labelText="Participant Name" value={this.state.name} onChange={this.handleChange} placeholder="Participant Name" />
      <FormGroup id="participant-details-note" labelText="Participant Note" value={this.state.note} onChange={this.handleChange} placeholder="Participant Note" />
    </Form>
  }
}

export default ParticipantDetailsForm;
