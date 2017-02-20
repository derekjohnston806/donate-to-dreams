/**
    BidsTableHeader.react.js

    @author:
      - Derek Johnston

    @desc:
      - A header for the bids table. (Obvy...)
*/
import React, { Component } from "react";
import H2 from "../html/H2.react";
import Row from "../bootstrap/Row.react";
import Col from "../bootstrap/Col.react";
import P from "../html/P.react";
import Strong from "../html/Strong.react";
import formatCurrency from "../../helpers/formatCurrency";

class BidsTableHeader extends Component {
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
    return <Row>
      <Col width="8">
        <H2 text="Event Bids" />
      </Col>
      <Col width="4">
        <H2 text={"Total Raised: " + formatCurrency(this.props.raised)} />
      </Col>
    </Row>
  }
}

export default BidsTableHeader;
