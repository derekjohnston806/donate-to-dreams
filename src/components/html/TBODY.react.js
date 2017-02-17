/**
    TBODY.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <tbody> element.
*/
import React, { Component } from "react";

class TBODY extends Component {
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
    return <tbody>
      { this.props.children }
    </tbody>
  }
}

export default TBODY;
