/**
    FormGroup.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a ".form-group" bootstrap element.
*/
import React, { Component } from "react";
import Label from "../html/Label.react";
import TextInput from "../html/TextInput.react";

class FormGroup extends Component {
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
    return <div className="form-group">
      <Label id={this.props.id} text={this.props.labelText} />
      <TextInput id={this.props.id} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
    </div>
  }
}

FormGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  labelText: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

export default FormGroup;
