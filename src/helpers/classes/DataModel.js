/**
    DataModel.js

    @author:
      - Derek Johnston

    @desc:
      - A class for handling the application's data.
*/

import generateDataModelIDString from "../generateDataModelIDString";

class DataModel {
  /**
    constructor(props)

    @desc:
      - Create an instance of this class.

    @param:
      - props (Object): The component's properties passed in by the parent.

    @return:
      - A new class object.
  */
  constructor() {
    console.log("Instantiating a DataModel object.");
    this.localRef = "donate_to_dreams_data_model"
    if (localStorage.getItem(this.localRef)) {
      console.log("Data does exists");
      this.data = JSON.parse(localStorage.getItem(this.localRef));
    } else {
      console.log("No data detected, creating empty model.");
      this.data = {
        summary: {},
        participants: {}
      }
    }
  }

  /**
    update()

    @desc:
      - Upload a fresh copy of the data model to local storage.

    @param:
      - null

    @return:
      - null
  */
  update() {
    const dataString = JSON.stringify(this.data);
    localStorage.setItem(this.localRef, dataString);
    console.log("Data is updated.");
  }

  /**
    refresh()

    @desc:
      - Have the model refresh itself from local storage.

    @param:
      - null

    @return:
      - null
  */
  refresh() {
    if (localStorage.getItem("donate_to_dreams_data_model")) {
      this.data = JSON.parse(localStorage.getItem("donate_to_dreams_data_model"));
      console.log("Data model is refreshed from local storage.");
    } else {
      console.log("Attempted to refresh, no data is available.");
    }
  }

  /**
    setEditingParticipantID(participantID)

    @desc:
      - Set the id of the participant currently being edited.

    @param:
      - participantID (String): The id of the participant currently
        being edited.

    @return:
      - null
  */
  setEditingParticipantID(participantID)   {
    console.log("Setting editing participantID: " + participantID);
    this.data.editingParticipantID = participantID;
    this.update();
  }

  /**
    getParticipantWithID(participantID)

    @desc:
      - Given the id for a participant, return that participant's data object.

    @param:
      - participantID (String): The participant's database ID.

    @return:
      - (Object): The participant's database object.
  */
  getParticipantWithID(participantID) {
      return this.data.participants[participantID];
  }

  /**
    deleteParticipantWithID(participantID)

    @desc:
      - Given a participant's database id, remove that participant from the
        database.

    @param:
      - participantID (String): The participant's database id.

    @return:
      - null
  */
  deleteParticipantWithID(participantID) {
    delete this.data.participants[participantID];
    this.update();
  }

  /**
    updateParticipant(participantID, participantData)

    @desc:
      - Update a participant's data node for a given ID in the database
        with the provided participant data.

    @param:
      - participantData (Object): The new data for the participant.

    @return:
      - null
  */
  updateParticipant(participantData)  {
    let participant = this.data.participants[this.data.editingParticipantID];

    delete this.data.participants[this.data.editingParticipantID];

    participant.number = participantData.number;
    participant.name = participantData.name;
    participant.note = participant.note;

    const participantID = generateDataModelIDString([participant.number, participant.name]);

    this.data.participants[participantID] = participant; 

    this.update();
  }
}

export default DataModel;
