/**
    H1.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <h1> element.
*/
import React, { Component } from "react";

class H1 extends Component {
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
    return <h1>
      { this.props.text }
    </h1>
  }
}

H1.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default H1;
