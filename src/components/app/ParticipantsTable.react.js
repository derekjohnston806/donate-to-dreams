/**
    ParticipantsTable.react.js

    @author:
      - Derek Johnston

    @desc:
      - A table of event participants with add/edit/delete functionality.
*/
import React, { Component } from "react";
import Container from "../bootstrap/Container.react";
import Table from "../bootstrap/Table.react";
import ParticipantsTableHeader from "./ParticipantsTableHeader.react";
import ParticipantsTableHeading from "./ParticipantsTableHeading.react";
import ParticipantsTableBody from "./ParticipantsTableBody.react";

class ParticipantsTable extends Component {
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
    return <Container>
      <ParticipantsTableHeader />
      <Table tableStyle="hover">
        <ParticipantsTableHeading />
        <ParticipantsTableBody participants={this.props.data} />
      </Table>
    </Container>
  }
}

export default ParticipantsTable;
