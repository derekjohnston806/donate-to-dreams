/**
    BidsTableBody.react.js

    @author:
      - Derek Johnston

    @desc:
      - The <TBODY> component of the bids table.
*/
import React, { Component } from "react";
import BidsTableEmptyRow from "./BidsTableEmptyRow.react";
import BidsTableRow from "./BidsTableRow.react";
import TBODY from "../html/TBODY.react";
import generateDataModelIDString from "../../helpers/generateDataModelIDString";

class BidsTableBody extends Component {
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

    this.getTableRows = this.getTableRows.bind(this);
  }

  /**
    getTableRows()

    @desc:
      - Generate the rows for the table.

    @param:
      - null

    @return:
      - (Component): The table row components.
  */
  getTableRows() {
    console.log("Get table rows:", this.props.bids);
    if ($.isEmptyObject(this.props.bids)) {
      return <BidsTableEmptyRow />
    } else {
      return this.props.bids.map((bid) => {
        return <BidsTableRow key={generateDataModelIDString([bid.number, String(Math.random()), String(bid.amount)])} number={bid.number} time={bid.time} name={bid.name} amount={String(bid.amount)} />
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
      { this.getTableRows() }
    </TBODY>
  }
}

export default BidsTableBody;
