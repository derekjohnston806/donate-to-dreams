/**
    ModalFooter.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a ".modal-footer" bootstrap element.
*/
import React, { Component } from "react";

class ModalFooter extends Component {
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
    return <div className="modal-footer">
      {this.props.children}
    </div>
  }
}

export default ModalFooter;
