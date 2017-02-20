/**
    GoalProgress.react.js

    @author:
      - Derek Johnston

    @desc:
      - Show the progress towards the event's three goals.
*/
import React, { Component } from "react";
import Row from "../bootstrap/Row.react";
import Col from "../bootstrap/Col.react";
import GoalProgressBar from "./GoalProgressBar.react";

class GoalProgress extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of this class.

    @param:
      - props (Object): The component's properties passed in by the parent.

    @return:
      - A new class object.
  */
  constructor(props) {
    super(props);

    this.calculateProgress = this.calculateProgress.bind(this);
  }

  /**
    calculateProgress()

    @desc:
      - Given a property indicating the amount raised, calculate the progress
        towards the event's goals for display in the progress bars.

    @param:
      - null

    @return:
      - (Array): An array of strings containing the progress level for each
        of the 3 goal levels.
  */
  calculateProgress() {
    let progress = ["0", "0", "0"]
    if (this.props.raised <= 30000) {
      progress[0] = String(Math.round(this.props.raised / 30000 * 100));
    } else if (this.props.raised <= 40000) {
      progress[0] = "100";
      progress[1] = String(Math.round((this.props.raised - 30000) / 10000 * 100));
    } else {
      progress[0] = "100";
      progress[1] = "100";
      progress[2] = String(Math.round((this.props.raised - 40000) / 10000 * 100));
    }
    return progress;
  }

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

    let progress = this.calculateProgress();

    return <Row>
      <Col width="4">
        <GoalProgressBar goal="$30,000" progress={progress[0]} raised={this.props.raised} />
      </Col>
      <Col width="4">
        <GoalProgressBar goal="$40,000" progress={progress[1]} raised={this.props.raised} />
      </Col>
      <Col width="4">
        <GoalProgressBar goal="$50,000" progress={progress[2]} raised={this.props.raised} />
      </Col>
    </Row>
  }
}

export default GoalProgress;
