/**
    ParticipantOption.react.js

    @author:
      - Derek Johnston

    @desc:
      - An option component for event participants.
*/
import React, { Component } from "react";
import Option from "../html/Option.react";

class ParticipantOption extends Component {
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
    return <Option value={this.props.number} name={this.props.number + " : " + this.props.name} />
  }
}

export default ParticipantOption;
