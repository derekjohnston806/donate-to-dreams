/**
    BidsTable.react.js

    @author:
      - Derek Johnston

    @desc:
      - A table for displaying bid information.
*/
import React, { Component } from "react";
import Container from "../bootstrap/Container.react";
import Table from "../bootstrap/Table.react";
import BidsTableHeader from "./BidsTableHeader.react";
import BidsTableHeading from "./BidsTableHeading.react";
import BidsTableBody from "./BidsTableBody.react";
import HR from "../html/HR.react";

class BidsTable extends Component {
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
    return <Container>
      <BidsTableHeader raised={String(this.props.raised)} />
      <HR />
      <Table tableStyle="hover">
        <BidsTableHeading />
        <BidsTableBody bids={this.props.bids} />
      </Table>
    </Container>
  }
}

export default BidsTable;
