/**
    UL.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <ul> element.
*/
import React, { Component } from "react";

class UL extends Component {
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
    return <ul>
      { this.props.children }
    </ul>
  }
}

export default UL;
