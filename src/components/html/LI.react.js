/**
    LI.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <li> element.
*/
import React, { Component } from "react";

class LI extends Component {
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
    return <li>
      { this.props.children }
    </li>
  }
}

export default LI;
