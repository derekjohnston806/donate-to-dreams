/**
    NewParticipantForm.react.js

    @author:
      - Derek Johnston

    @desc:
      - Let the user manually add a new participant to the event.
*/
import React, { Component } from "react";
import Form from "../html/Form.react";
import FormGroup from "../bootstrap/FormGroup.react";
import DataModel from "../../helpers/classes/DataModel";
import generateDataModelIDString from "../../helpers/generateDataModelIDString";

class NewParticipantForm extends Component {
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
      number: "",
      name: "",
      note: ""
    };

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
    handleNumberChange(number)

    @desc:
      - Update the state with the new bid number.

    @param:
      - number (String): The user-entered bid number.

    @return:
      - null
  */
  handleNumberChange(number) {
    this.setState({
      number: number
    });
  }

  /**
    handleNameChange(name)

    @desc:
      - Update the state with the new name

    @param:
      - name (String): The user-entered bid number.

    @return:
      - null
  */
  handleNameChange(name)  {
    this.setState({
      name: name
    });
  }

  /**
    handleNoteChange(note)

    @desc:
      - Update the state with the new note.

    @param:
      - note (String): The user-entered note.

    @return:
      - null
  */
  handleNoteChange(note)   {
    this.setState({
      note: note
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
    console.log("Submitting new participant form...");
    let dataModel = new DataModel();

    // First check that there is no bid number conflict.
    for (const key in dataModel.data.participants) {
      const participant = dataModel.data.participants[key];
      if (participant.number === this.state.number) {
        console.error("This bid number already exists in the system");
        return
      }
    }

    const participant = {
      number: this.state.number,
      name: this.state.name,
      note: this.state.note,
      contribution: 0
    };

    const id = generateDataModelIDString([participant.number, participant.name]);
    dataModel.data.participants[id] = participant;
    dataModel.update();

    this.setState({
      name: "",
      number: "",
      note: ""
    });

    this.props.onSuccess();
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
    return <Form id="new-participant-form" onSubmit={this.handleSubmit}>
      <FormGroup id="new-participant-number" labelText="Participant Bid Number" value={this.state.number} onChange={this.handleNumberChange} placeholder="Bid Number" />
      <FormGroup id="new-participant-name" labelText="Participant Name" value={this.state.name} onChange={this.handleNameChange} placeholder="Participant Name" />
      <FormGroup id="new-participant-note" labelText="Participant Note" value={this.state.note} onChange={this.handleNoteChange} placeholder="Participant Note" />
    </Form>
  }
}

NewParticipantForm.propTypes = {
  onSuccess: React.PropTypes.func.isRequired
};

export default NewParticipantForm;
