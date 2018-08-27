/*
  This file creates a list of items. It is exported out
  and used by the top-level ShoppingCart component from
  shopping_cart.js to construct a list of items to render.
  This is the default value configuration, used at points
  as a reference to reset values when necessary.
*/
const StockItems = [
  {
    key: 1,
    name: 'cotton tshirt',
    style: 'MS13KT1906',
    colors: ['orange', 'blue', 'red'],
    sizes: ['XS', 'S', 'M'],
    price: '10.00',
    quantity: 1
  },
  {
    key: 2,
    name: 'pullover hoodie',
    style: 'MS13KT1906',
    colors: ['black', 'blue', 'red'],
    sizes: ['S', 'M'],
    size: 'S',
    price: '25.00',
    quantity: 1
  },
  {
    key: 3,
    name: 'motorcycle jacket',
    style: 'ML13KT1906',
    colors: ['grey', 'blue', 'red', 'brown'],
    sizes: ['M', 'L', 'XL'],
    size: 'M',
    price: '25.00',
    quantity: 1
  },
  {
    key: 4,
    name: 'denim jacket',
    style: 'AS13KT1906',
    colors: ['blue', 'red', 'brown', 'grey'],
    sizes: ['L', 'XL'],
    size: 'L',
    price: '55.00',
    quantity: 1
  },
  {
    key: 5,
    name: 'flannel shirt',
    style: 'BD12KT1814',
    colors: ['red', 'green', 'black'],
    sizes: ['XS', 'S', 'M'],
    size: 'XS',
    price: '23.50',
    quantity: 1
  }
];

export default StockItems;
