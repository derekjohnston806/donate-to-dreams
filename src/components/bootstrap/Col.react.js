/**
    Col.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the bootstrap ".col" class.
*/
import React, { Component } from "react";

class Col extends Component {
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
    return <div style={this.props.style} className={ "col-md-" + this.props.width }>
      { this.props.children }
    </div>
  }
}

Col.propTypes = {
  style: React.PropTypes.object,
  width: React.PropTypes.string.isRequired
};

export default Col;
