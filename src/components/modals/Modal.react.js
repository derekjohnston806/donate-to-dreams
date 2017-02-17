/**
    Modal.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap modal.
*/
import React, { Component } from "react";

class Modal extends Component {
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
    return <div id={this.props.id} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby={this.props.id + "Label"}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {this.props.children}
        </div>
      </div>
    </div>
  }
}

export default Modal;
