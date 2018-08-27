import React, { Component } from 'react';
import Promotions from '../data/Promotions';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = { promoCode: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //Handler for promo code text changes
    this.setState({ promoCode: event.target.value.toUpperCase() });
    if (this.state.apply_promo === false) {
      this.resetValues();
    }
    this.setState({ apply_promo: true });
  }

  onFormSubmit(event) {
    //Handler for promo code button submit
    event.preventDefault();
    const promoCode = this.state.promoCode;
    const promoPrice = Promotions.get(this.state.promoCode);
    if (Promotions.get() !== undefined) {
      this.props.updatePromoCode(promoCode, promoPrice);
    } else this.props.updatePromoCode(promoCode, promoPrice);
  }

  render() {
    return (
      <div className="promo-code">
        <div className="promo-code-header">
          ENTER A PROMOTIONAL CODE OR GIFT CARD
        </div>
        <div>
          <form className="promo-code-bar" onSubmit={this.onFormSubmit}>
            <input
              className="promo-input input"
              type="text"
              value={this.state.promoCode}
              onChange={this.onInputChange}
              maxLength="5"
            />
            <input
              className="promo-button submit"
              type="submit"
              value="APPLY"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default PromoCode;
