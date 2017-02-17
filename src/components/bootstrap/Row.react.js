/**
    Row.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the ".row" bootstrap class element.
*/
import React, { Component } from "react";

class Row extends Component {
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
    return <div className="row" style={this.props.style}>
      { this.props.children }
    </div>
  }
}

Row.propTypes = {
  style: React.PropTypes.object
};

export default Row;
