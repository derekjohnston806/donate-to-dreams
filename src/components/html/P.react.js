/**
    P.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <p> element.
*/
import React, { Component } from "react";

class P extends Component {
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
    return <p>
      { this.props.text }
    </p>
  }
}

P.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default P;
