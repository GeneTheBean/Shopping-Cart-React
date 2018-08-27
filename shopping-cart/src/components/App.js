import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">YOUR SHOPPING CART</h1>
        </header>
        <p className="App-intro">
          If the cart is completely empty, then we shall again add back the
          products for you.
        </p>
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
