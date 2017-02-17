/**
    H2.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <h2> element.
*/
import React, { Component } from "react";

class H2 extends Component {
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
    return <h2 style={this.props.style}>
      { this.props.text }
    </h2>
  }
}

H2.propTypes = {
  text: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
};

export default H2;
