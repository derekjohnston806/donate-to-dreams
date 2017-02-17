/**
    NewParticipantModal.react.js

    @author:
      - Derek Johnston

    @desc:
      - A modal popup for entering a new participant into the database.
*/
import React, { Component } from "react";
import Modal from "../modals/Modal.react";
import ModalHeader from "../modals/ModalHeader.react";
import ModalBody from "../modals/ModalBody.react";
import ModalFooter from "../modals/ModalFooter.react";
import H3 from "../html/H3.react";
import Button from "../bootstrap/Button.react";
import NewParticipantForm from "./NewParticipantForm.react";
import externallySubmitFormWithId from "../../helpers/externallySubmitFormWithId";

class NewParticipantModal extends Component {
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

    this.dismiss = this.dismiss.bind(this);
    this.submit = this.submit.bind(this);
  }

  /**
    dismiss()

    @desc:
      - Have the modal dismiss itself.

    @param:
      - null

    @return:
      - null
  */
  dismiss() {
    $("#new-participant-modal").modal("hide");
  }

  /**
    submit()

    @desc:
      - Submit the new participant form.

    @param:
      - null

    @return:
      - null
  */
  submit() {
    externallySubmitFormWithId("new-participant-form");
    this.props.onSubmit();
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
    return <Modal id="new-participant-modal">
      <ModalHeader>
        <H3 text="Add a New Participant" />
      </ModalHeader>
      <ModalBody>
        <NewParticipantForm onSuccess={this.dismiss} />
      </ModalBody>
      <ModalFooter>
        <Button style="default" text="Cancel" onClick={this.dismiss} />
        <Button style="success" text="Add Participant" onClick={this.submit} />
      </ModalFooter>
    </Modal>
  }
}

export default NewParticipantModal;
