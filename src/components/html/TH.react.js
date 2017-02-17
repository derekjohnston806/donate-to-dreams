/**
    TH.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <th> element.
*/
import React, { Component } from "react";

class TH extends Component {
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
    return <th style={this.props.style}>
      { this.props.text }
    </th>
  }
}

TH.propTypes = {
  style: React.PropTypes.object,
  text: React.PropTypes.string.isRequired
};

export default TH;
