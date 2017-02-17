/**
    ModalHeader.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a .modal-header bootstrap element.
*/
import React, { Component } from "react";

class ModalHeader extends Component {
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
    return <div className="modal-header">
       <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
       {this.props.children}
    </div>
  }
}

export default ModalHeader;
