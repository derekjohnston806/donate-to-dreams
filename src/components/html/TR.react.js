/**
    TR.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <tr> element.
*/
import React, { Component } from "react";

class TR extends Component {
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
    return <tr style={this.props.style} onClick={this.props.onClick}>
      { this.props.children }
    </tr>
  }
}

TR.propTypes = {
  style: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default TR;
