/**
    Strong.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <strong> tag.
*/
import React, { Component } from "react";

class Strong extends Component {
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
    return <strong>
      { this.props.text }
    </strong>
  }
}

Strong.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Strong;
