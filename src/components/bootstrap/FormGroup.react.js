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
import SelectInput from "../html/SelectInput.react";

class FormGroup extends Component {
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

    this.getInputComponent = this.getInputComponent.bind(this);
  }

  /**
    getInputComponent()

    @desc:
      - Based on the 'type' property, render the appropriate input element.

    @param:
      - null

    @return:
      - (Component): The input component for the FormGroup component.
  */
  getInputComponent() {
    switch (this.props.type) {
      case "select":
        return <SelectInput id={this.props.id} value={this.props.value} onChange={this.props.onChange} options={this.props.options} />
      default:
        return <TextInput id={this.props.id} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
    }
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
    return <div className="form-group">
      <Label id={this.props.id} text={this.props.labelText} />
      { this.getInputComponent() }
    </div>
  }
}

FormGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  labelText: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  options: React.PropTypes.array
};

export default FormGroup;
