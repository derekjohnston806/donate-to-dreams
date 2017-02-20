/**
    SelectInput.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <select> element.
*/
import React, { Component } from "react";
import Option from "./Option.react";

class SelectInput extends Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  /**
    getOptions()

    @desc:
      - Render the options for the select input component.

    @param:
      - null

    @return:
      - (Component): The <Option /> components.
  */
  getOptions() {
    return this.props.options.map((option) => {
      return <Option key={option.value + "-" + option.name} value={option.value} name={option.name} />
    });
  }

  /**
    handleChange(event)

    @desc:
      - Handle a change in the select input element.

    @param:
      - event (Object): The value change event.

    @return:
      - null
  */
  handleChange(event) {
    this.props.onChange(event.target.value);
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
    return <select id={this.props.id} className="form-control" value={this.props.value} onChange={this.handleChange} >
      { this.getOptions() }
    </select>
  }
}

SelectInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SelectInput;
