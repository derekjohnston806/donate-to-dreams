/**
    H3.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <h3> element.
*/
import React, { Component } from "react";

class H3 extends Component {
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
    return <h3 style={this.props.style}>
      {this.props.text}
    </h3>
  }
}

H3.propTypes = {
  style: React.PropTypes.object,
  text: React.PropTypes.string.isRequired
};

export default H3;
