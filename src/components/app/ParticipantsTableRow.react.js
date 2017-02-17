/**
    ParticipantsTableRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - Provide a selectable row for each participant in the event.
*/
import React, { Component } from "react";
import TR from "../html/TR.react";
import TD from "../html/TD.react";
import generateDataModelIDString from "../../helpers/generateDataModelIDString";

class ParticipantsTableRow extends Component {
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

    this.handleClick = this.handleClick.bind(this);
  }

  /**
    handleClick()

    @desc:
      - Invoke the onClick prop with the key value.

    @param:
      - null

    @return:
      - null
  */
  handleClick() {
    this.props.onClick(generateDataModelIDString([this.props.number, this.props.name]));
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
    return <TR style={{ cursor: "pointer" }} onClick={this.handleClick}>
      <TD text={this.props.number} />
      <TD text={this.props.name} />
      <TD text={this.props.note} />
      <TD text={this.props.contribution} />
    </TR>
  }
}

export default ParticipantsTableRow;
