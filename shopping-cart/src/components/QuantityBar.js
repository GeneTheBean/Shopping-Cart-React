import React, { Component } from 'react';

class QuantityBar extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: props.item.quantity };
  }

  //Handler for the quantity bar, setup to receive a valid inpout
  onInputChange(event) {
    let value = Math.max(1, event.target.value);
    if (value > 99) value = 99;
    let item = this.props.item;
    item.quantity = value;
    this.props.updateListItem(item);
    this.setState({ quantity: value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item.quantity !== this.state.quantity) {
      this.setState({ quantity: this.props.item.quantity });
    }
  }

  render() {
    return (
      <input
        className={this.props.useClass}
        type={this.props.type}
        value={this.state.quantity}
        onChange={this.onInputChange.bind(this)}
        maxLength="2"
        step={this.props.step}
      />
    );
  }
}

export default QuantityBar;
