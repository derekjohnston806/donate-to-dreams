/**
    Label.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <label> element.
*/
import React, { Component } from "react";

class Label extends Component {
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
    return <label htmlFor={this.props.id}>
      {this.props.text}
    </label>
  }
}

Label.proptypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Label;
