/**
    ParticipantDetailsModal.react.js

    @author:
      - Derek Johnston

    @desc:
      - A bootstrap modal element for viewing/editing/deleting
        participant information.
*/
import DataModel from "../../helpers/classes/DataModel";
import React, { Component } from "react";
import Modal from "../modals/Modal.react";
import ModalHeader from "../modals/ModalHeader.react";
import ModalBody from "../modals/ModalBody.react";
import ModalFooter from "../modals/ModalFooter.react";
import H3 from "../html/H3.react";
import Button from "../bootstrap/Button.react";
import ParticipantDetailsForm from "./ParticipantDetailsForm.react";
import externallySubmitFormWithId from "../../helpers/externallySubmitFormWithId";

class ParticipantDetailsModal extends Component {
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
    $("#participant-details-modal").modal("hide");
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
    externallySubmitFormWithId("participant-details-form");
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
    return <Modal id="participant-details-modal">
      <ModalHeader>
        <H3 text="Participant Details" />
      </ModalHeader>
      <ModalBody>
        <ParticipantDetailsForm onSubmit={this.dismiss} />
      </ModalBody>
      <ModalFooter>
        <Button style="default" text="Cancel" onClick={this.dismiss} />
        <Button style="danger" text="Delete Participant" onClick={this.props.onDelete} />
        <Button style="success" text="Save Participant" onClick={this.submit} />
      </ModalFooter>
    </Modal>
  }
}

export default ParticipantDetailsModal;
