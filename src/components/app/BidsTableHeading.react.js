/**
    BidsTableHeading.js

    @author:
      - Derek Johnston

    @desc:
      - A heading row for the bids table.
*/
import React, { Component } from "react";
import THEAD from "../html/THEAD.react";
import TR from "../html/TR.react";
import TH from "../html/TH.react";

class BidsTableHeading extends Component {
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
        <TH text="Bid Number" />
        <TH text="Bid Time" />
        <TH text="Bidder's Name" />
        <TH text="Bid Amount" />
      </TR>
    </THEAD>
  }
}

export default BidsTableHeading;
