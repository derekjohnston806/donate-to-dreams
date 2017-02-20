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
        raised: 0,
        bids: [],
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
    participant.note = participantData.note;

    const participantID = generateDataModelIDString([participant.number, participant.name]);

    this.data.participants[participantID] = participant;

    this.update();
  }

  /**
    newBidForParticipant(bid)

    @desc:
      -

    @param:
      -

    @return:
      -
  */
  newBidForParticipant(bid) {
    console.log("Data Model Bid:", bid);
    const participants = this.data.participants;
    let bidder;
    let bidderID;

    for (let key in participants) {
      const participant = participants[key];
      console.log(participant.number, bid.number);
      if (String(participant.number) === String(bid.number)) {
        bidderID = key;
        bidder = participant;
        break;
      }
    }

    const bidData = {
      number: bidder.number,
      time: new Date().toLocaleTimeString(),
      name: bidder.name,
      amount: parseInt(bid.amount)
    };

    bidder.contribution += parseInt(bid.amount);
    this.data.raised += parseInt(bid.amount);
    this.data.participants[bidderID] = bidder;
    this.data.bids.push(bidData);

    this.update();
  }

  /**
    createNewParticipant(name)

    @desc:
      - Given a name string, create a new participant on the fly
        and return that participant's new bidder number.

    @param:
      - name (String): The name for the particiapnt.

    @return:
      - (String): The bidder number for the participant.
  */
  createNewParticipant(name) {
      this.refresh();
      let newBidNumber = 0;
      for (let key in this.data.participants) {
        const participant = this.data.participants[key];
        if (participant.number > newBidNumber) {
          newBidNumber = parseInt(participant.number);
        }
      }

      newBidNumber += 1;

      const newParticipantID = generateDataModelIDString([String(newBidNumber), name]);
      const newParticipant = {
        number: String(newBidNumber),
        name: name,
        note: "",
        contribution: 0
      };

      this.data.participants[newParticipantID] = newParticipant;
      this.update();
      return newBidNumber;
  }
}

export default DataModel;
