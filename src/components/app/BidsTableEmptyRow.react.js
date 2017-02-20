/**
    BidsTableEmptyRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - A row for the table if there are no bids yet.
*/
import React, { Component } from "react";
import TR from "../html/TR.react";
import TD from "../html/TD.react";

class BidsTableEmptyRow extends Component {
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
      <TD text="No Bids" style={{ textAlign: "center" }} colspan="4" />
    </TR>
  }
}

export default BidsTableEmptyRow;
