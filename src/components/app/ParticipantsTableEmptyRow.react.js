/**
    ParticipantsTableEmptyRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - If there are no participants, this row will be displayed.
*/
import React, { Component } from "react";
import TR from "../html/TR.react";
import TD from "../html/TD.react";

class ParticipantsTableEmptyRow extends Component {
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
    return <TR>
      <TD text="No Participants" style={{ textAlign: "center" }} colspan="4" />
    </TR>
  }
}

export default ParticipantsTableEmptyRow;
