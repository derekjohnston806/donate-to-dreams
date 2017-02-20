/**
    BidsTableRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - A row displaying the information for a single bid.
*/
import React, { Component } from "react";
import TR from "../html/TR.react";
import TD from "../html/TD.react";
import formatCurrency from "../../helpers/formatCurrency";

class BidsTableRow extends Component {
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
      <TD text={this.props.number} />
      <TD text={this.props.time} />
      <TD text={this.props.name} />
      <TD text={formatCurrency(this.props.amount)} />
    </TR>
  }
}

BidsTableRow.propTypes = {
  number: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  amount: React.PropTypes.string.isRequired
}

export default BidsTableRow;
