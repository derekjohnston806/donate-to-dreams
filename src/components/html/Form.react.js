/**
    Form.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <form> element
*/
import React, { Component } from "react";

class Form extends Component {
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

    this.setClassName = this.setClassName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
    setClassName()

    @desc:
      - This method will let the developer select if this form should be inline.

    @param:
      - null

    @return:
      - (String): The appropriate classname for the form.
  */
  setClassName() {
    return this.props.isInline ? "form-inline" : "";
  }

  /**
    handleSubmit(event)

    @desc:
      - Manage the default actions for a form submission and pass the submit
        to the parent.

    @param:
      - event (Object): The automatically generated submit event object.

    @return:
      - null
  */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
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
    return <form className={this.setClassName()} id={this.props.id} onSubmit={this.handleSubmit}>
      {this.props.children}
    </form>
  }
}

Form.propTypes = {
  id: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  isInline: React.PropTypes.bool
};

export default Form;
