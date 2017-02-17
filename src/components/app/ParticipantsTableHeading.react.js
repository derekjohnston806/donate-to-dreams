/**
    ParticipantsTableHeading.js

    @author:
      - Derek Johnston

    @desc:
      - A component for showing a heading row for the ParticipantsTable.
*/
import React, { Component } from "react";
import THEAD from "../html/THEAD.react";
import TR from "../html/TR.react";
import TH from "../html/TH.react";

class ParticipantsTableHeading extends Component {
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
    return <THEAD>
      <TR>
        <TH text="Bid #" />
        <TH text="Name" />
        <TH text="Note" />
        <TH text="Contribution" />
      </TR>
    </THEAD>
  }
}

export default ParticipantsTableHeading;
