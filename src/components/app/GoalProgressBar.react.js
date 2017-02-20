/**
    GoalProgressBar.react.js

    @author:
      - Derek Johnston

    @desc:
      - Show the progress towards a specific event goal.
*/
import React, { Component } from "react";
import ProgressBar from "../bootstrap/ProgressBar.react";
import formatCurrency from "../../helpers/formatCurrency";

class GoalProgressBar extends Component {
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
    return <div>
      <p className="lead">{formatCurrency(this.props.raised) + " / " + this.props.goal}</p>
      <ProgressBar progress={this.props.progress} />
    </div>
  }
}

GoalProgressBar.propTypes = {
  goal: React.PropTypes.string.isRequired,
  progress: React.PropTypes.string.isRequired
};

export default GoalProgressBar;
