/**
    ParticipantsTableBody.react.js

    @author:
      - Derek Johnston

    @desc:
      - The body of the table which lists the participants.
*/
import React, { Component } from "react";
import TBODY from "../html/TBODY.react";
import ParticipantsTableEmptyRow from "./ParticipantsTableEmptyRow.react";
import ParticipantsTableRow from "./ParticipantsTableRow.react";
import generateDataModelIDString from "../../helpers/generateDataModelIDString";
import obj2arr from "../../helpers/obj2arr";

class ParticipantsTableBody extends Component {
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

    this.getParticipantRows = this.getParticipantRows.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  /**
    handleRowClick(id)

    @desc:
      - Handle the user's click on a participant row.

    @param:
      - id (String): The id for the participant at that row.

    @return:
      - null
  */
  handleRowClick(id) {
    console.log("Row clicked with id:", id);
  }

  /**
    getParticipantRows()

    @desc:
      - Based on the provided particpant data, render the row items
        in the table body.

    @param:
      - null

    @return:
      - Component(s): The rows for the table body.
  */
  getParticipantRows() {
    if ($.isEmptyObject(this.props.participants)) {
      return <ParticipantsTableEmptyRow />
    } else {
      return obj2arr(this.props.participants).map((participant) => {
        return <ParticipantsTableRow
          key={generateDataModelIDString([participant.number, participant.name])}
          number={participant.number}
          name={participant.name}
          note={participant.note}
          contribution={participant.contribution}
          onClick={this.handleRowClick}
        />
      });
    }
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
    return <TBODY>
      { this.getParticipantRows() }
    </TBODY>
  }
}

ParticipantsTableBody.propTypes = {
  participants: React.PropTypes.object.isRequired
};

export default ParticipantsTableBody;
