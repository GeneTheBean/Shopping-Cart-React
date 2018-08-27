import React from 'react';
import CustomerService from './CustomerService';
import PriceBox from './PriceBox';

const Checkout = props => {
  //Component for checkout info and functionality
  return (
    <div className="checkout">
      <CustomerService />
      <PriceBox list={props.list} />
    </div>
  );
};

export default Checkout;
