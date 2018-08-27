import React, { Component } from 'react';
import ShoppingCartTableRow from './ShoppingCartTableRow';

/*
   ShoppingCartTable is responsible for representing the table
   on the main page. Any changes made to the list in the ShoppingCart
   state will be made to the table.
*/

class ShoppingCartTable extends Component {
  constructor(props) {
    super(props);
    const rows = this.props.list.map(this.createRow.bind(this));
    this.state = { rows };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.list !== this.props.list) {
      this.updateTable();
    }
  }

  updateTable() {
    //Creates a list of rows based on ShoppingCart list
    const rows = this.props.list.map(this.createRow.bind(this));
    this.setState({ rows });
  }

  updateListItem(item) {
    //Calls the ShoppingCart updateListitem method
    this.props.updateListItem(item);
  }

  createRow(item) {
    //Creates a single table row from a ShoppingCart list item
    return (
      <ShoppingCartTableRow
        key={item.key}
        item={item}
        remove={this.props.remove.bind(this)}
        updateListItem={this.updateListItem.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="table-body">
        <table className="table" align="center">
          <thead className="border_bottom">
            <tr className="table-rows">
              <th className="table-head-left">{this.props.numItems} ITEMS</th>
              <th className="table-head">SIZE</th>
              <th className="table-head">QTY</th>
              <th className="table-head">PRICE</th>
            </tr>
          </thead>
          <tbody>{this.state.rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ShoppingCartTable;
