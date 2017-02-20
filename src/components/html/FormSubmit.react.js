/**
    FormSubmit.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an input[type="submit"] element.
*/
import React, { Component } from "react";

class FormSubmit extends Component {
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
    return <input type="submit" className="form-control" value={this.props.value} />
  }
}

FormSubmit.propTypes = {
  value: React.PropTypes.string.isRequired
};

export default FormSubmit;
