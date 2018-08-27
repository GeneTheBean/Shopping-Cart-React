import React, { Component } from 'react';
import Item from './Item';
import ShoppingCartTable from './ShoppingCartTable';
import Checkout from './Checkout';
import StockItems from '../data/StockItems';

/*
   Shopping Cart is the main top-level component for this application.
   It handles the most import piece of state: a list of Items. The internal
   state containing the list is passed down to its child components for
   visual representation in the DOM.
*/

class ShoppingCart extends Component {
  constructor() {
    super();
    const itemsList = StockItems.map(item => {
      return new Item(item);
    });

    this.state = {
      list: itemsList,
      numItems: itemsList.length
    };
  }

  resetList() {
    //Called either when the shopping cart is empty
    const itemsList = StockItems.map(item => {
      return new Item(item);
    });
    this.setState({
      list: itemsList,
      numItems: itemsList.length
    });
  }

  updateListItem(item) {
    //Update a single item on the list
    const arr = [...this.state.list];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === item.key) {
        arr[i] = item;
        this.setState({
          list: arr
        });
      }
    }
  }

  remove(key) {
    const arr = [...this.state.list];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        arr.splice(i, 1);
        this.setState({
          list: arr,
          numItems: this.state.numItems - 1
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.list.length === 0) {
      this.resetList();
    }
  }

  render() {
    return (
      <div>
        <ShoppingCartTable
          list={this.state.list}
          numItems={this.state.numItems}
          updateListItem={this.updateListItem.bind(this)}
          resetList={this.resetList.bind(this)}
          remove={this.remove.bind(this)}
        />
        <Checkout list={this.state.list} />
      </div>
    );
  }
}

export default ShoppingCart;
