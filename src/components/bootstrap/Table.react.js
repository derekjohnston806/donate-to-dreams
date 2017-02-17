/**
    Table.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <table> element with bootstrap classes.
*/
import React, { Component } from "react";

class Table extends Component {
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
    return <table className={ "table table-" + this.props.tableStyle }>
      { this.props.children }
    </table>
  }
}

Table.propTypes = {
  tableStyle: React.PropTypes.string.isRequired
};

export default Table;
