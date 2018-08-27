import React, { Component } from 'react';
import PromoCode from './PromoCode';

const DEFAULT_SHIPPING = parseFloat(10).toFixed(2);

class PriceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      shipping: DEFAULT_SHIPPING,
      promoCode: '',
      promoPrice: parseFloat(0).toFixed(2),
      estimatedTotal: 0
    };
  }

  componentDidMount() {
    this.updatePrices();
  }

  updatePrices() {
    let subtotal = 0;
    const arr = [...this.props.list];
    for (let i = 0; i < arr.length; i++) {
      subtotal += arr[i].price * arr[i].quantity;
    }

    let shipping = subtotal > 50 ? 0 : DEFAULT_SHIPPING;

    this.setState({
      subtotal: parseFloat(subtotal).toFixed(2),
      estimatedTotal: (
        subtotal +
        parseFloat(this.state.promoPrice) +
        parseFloat(shipping)
      ).toFixed(2),
      shipping: shipping
    });
  }

  updatePromoCode(promoCode, promoPrice) {
    if (promoPrice === undefined) {
      this.setState({ promoCode: '', promoPrice: parseFloat(0).toFixed(2) });
    } else {
      this.setState({
        promoCode: promoCode,
        promoPrice: parseFloat(promoPrice).toFixed(2)
      });
    }
  }

  //Update the price when the order is edited
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.list !== this.props.list) {
      this.updatePrices();
    }

    if (prevState.promoCode !== this.state.promoCode) {
      this.updatePrices();
    }
  }

  render() {
    const shippingString =
      this.state.shipping === 0 ? 'FREE' : '$' + this.state.shipping;

    return (
      <div>
        <div className="price">
          <PromoCode updatePromoCode={this.updatePromoCode.bind(this)} />

          <div className="line-break" />
          <div className="price-option">
            <h3 className="price-option-text">SUBTOTAL</h3>
            <h3 className="price-option-price-small">${this.state.subtotal}</h3>
          </div>
          <div className="price-option">
            <h3 className="price-option-text">
              PROMOTION CODE {this.state.promoCode} APPLIED
            </h3>
            <h3 className="price-option-price-small">
              ${this.state.promoPrice}
            </h3>
          </div>
          <div className="price-option">
            <h3 className="price-option-text">ESTIMATED SHIPPING*</h3>
            <h3 className="price-option-price-small">{shippingString}</h3>
          </div>
          <div className="line-break" />
          <div className="price-option">
            <h3 className="total-price-text">ESTIMATED TOTAL</h3>
            <h3 className="total-price">${this.state.estimatedTotal}</h3>
          </div>
          <div className="line-break-med" />
          <div className="checkout-buttons">
            <button className="price-submit btn">PURCHASE</button>
            <div className="continue-block">
              <form action="#">
                <a href="#" className="continue-text" type="submit">
                  CONTINUE SHOPPING
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PriceBox;
