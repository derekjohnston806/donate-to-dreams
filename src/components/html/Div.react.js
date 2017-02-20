/**
    Div.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <div> element.
*/
import React, { Component } from "react";

class Div extends Component {
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
    return <div style={this.props.style}></div>
  }
}

Div.propTypes = {
  style: React.PropTypes.object
};

export default Div;
