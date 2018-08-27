import React, { Component } from 'react';
import ShoppingCartTableItem from './ShoppingCartTableItem';
import QuantityBar from './QuantityBar';

class ShoppingCartTableRow extends Component {
  render() {
    return (
      <tr
        className="border_bottom"
        key={this.props.item.key}
        quantity={this.props.item.quantity}
        price={this.props.item.price}
        size={this.props.item.size}
      >
        <td>
          <ShoppingCartTableItem
            item={this.props.item}
            remove={this.props.remove.bind(this)}
            updateListItem={this.props.updateListItem.bind(this)}
          />
        </td>
        <td className="size-col table-col">
          <div className="size-col-text">{this.props.item.size}</div>
        </td>
        <td className="quantity-col table-col">
          <QuantityBar
            useClass="quantity-bar-small"
            type="text"
            item={this.props.item}
            updateListItem={this.props.updateListItem.bind(this)}
          />
        </td>
        <td className="price-col table-col">
          <div className="price-col-text">${this.props.item.price}</div>
        </td>
      </tr>
    );
  }
}

export default ShoppingCartTableRow;
