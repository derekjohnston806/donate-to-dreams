/**
    Button.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap button element.
*/
import React, { Component } from "react";

class Button extends Component {
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
    return <button className={ "btn btn-" + this.props.style } onClick={ this.props.onClick }>
      { this.props.text }
    </button>
  }
}

Button.propTypes = {
  style: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Button;
