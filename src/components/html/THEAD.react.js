/**
    THEAD.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <thead> element.
*/
import React, { Component } from "react";

class thead extends Component {
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
    return <thead>
      { this.props.children }
    </thead>
  }
}

export default thead;
