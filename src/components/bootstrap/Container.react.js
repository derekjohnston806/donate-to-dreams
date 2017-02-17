/**
    Container.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the bootstrap ".container" class element.
*/

import React, { Component } from "react";

class Container extends Component {
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
    return <div className="container">
      { this.props.children }
    </div>
  }
}

export default Container;
