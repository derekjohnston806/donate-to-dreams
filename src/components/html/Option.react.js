/**
    Option.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <option> element.
*/
import React, { Component } from "react";

class Option extends Component {
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
    return <option value={this.props.value}>
      {this.props.name}
    </option>
  }
}

Option.propTypes = {
  value: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Option;
