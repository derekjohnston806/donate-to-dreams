/**
    ProgressBar.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap progress bar element.
*/
import React, { Component } from "react";

class ProgressBar extends Component {
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
    return <div className="progress">
      <div className="progress-bar" role="progressbar" aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100" style={{width: this.props.progress + "%"}}>
        {this.props.progress}%
      </div>
    </div>
  }
}

export default ProgressBar;
