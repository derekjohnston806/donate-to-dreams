/**
    ModalBody.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a ".modal-body" bootstrap element.
*/
import React, { Component } from "react";

class ModalBody extends Component {
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
    return <div className="modal-body">
      {this.props.children}
    </div>
  }
}

export default ModalBody;
