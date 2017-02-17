/**
    TD.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <td> element.
*/
import React, { Component } from "react";

class TD extends Component {
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
    return <td style={this.props.style} colSpan={this.props.colspan}>
      {this.props.text}
    </td>
  }
}

TD.propTypes = {
  colspan: React.PropTypes.string,
  style: React.PropTypes.object,
  text: React.PropTypes.string.isRequired
};

export default TD;
