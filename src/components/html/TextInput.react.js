/**
    TextInput.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an input[type="text"] element.
*/
import React, { Component } from "react";

class TextInput extends Component {
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
  }

  /**
    handleChange(event)

    @desc:
      - Handle a change event in the input by taking the text
        value from the event object and passing it to the parent.

    @param:
      - event (Object): The automatically generated change event object.

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
    return <input
      type="text"
      className="form-control"
      value={this.props.value}
      onChange={this.handleChange}
      placeholder={this.props.placeholder}
    />
  }
}

TextInput.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

export default TextInput;
