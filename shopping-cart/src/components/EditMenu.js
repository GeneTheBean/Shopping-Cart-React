import React from 'react';
import QuantityBar from './QuantityBar';
import Icons from '../data/Icons';
import Sizes from '../data/Sizes';

/* style objects for modal */
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: '5rem'
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: '50rem',
  minHeight: '40rem',
  margin: '0 auto',
  padding: '3rem',
  position: 'relative',
  animation: 'moveInTop .5s ease-in'
};

const footerStyle = {
  position: 'absolute',
  bottom: '2rem'
};

/*
   EditMenu component is the modal for the menu to edit the item order.
   It receives the item from the parent component and has it's own
   state to keep track of user events. It receives a callback function
   from the parent to toggle its visibility.
*/

export default class EditMenu extends React.Component {
  componentDidMount() {
    this.setCurrentValues();
    this.updateItem = this.updateItem.bind(this);
  }

  setCurrentValues() {
    this.setState({
      key: this.props.item.key,
      color: this.props.item.color,
      size: this.props.item.size,
      quantity: this.props.item.quantity
    });
  }

  /*
    Function called when user clicks the X button (modal will hide).
    It is designed to reset the values (so we don't save user changes)
  */
  closeMenu() {
    this.props.toggleMenu();
    this.setCurrentValues();
  }

  selectColor(color) {
    this.setState({ color: color });
  }

  selectSize(size) {
    this.setState({ size: size });
  }

  selectQuantity(item) {
    this.setState({ quantity: item.quantity });
  }

  updateItem() {
    //Update the current item and update the ShoppingCart list
    let item = this.props.item;
    item.color = this.state.color;
    item.size = this.state.size;
    item.quantity = this.state.quantity;
    this.props.updateListItem(item);
    this.props.toggleMenu(); //Hide the menu after an edit
  }

  render() {
    if (this.props.show) {
      return (
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <button className="exit-button" onClick={() => this.closeMenu()}>
              X
            </button>

            <div className="menu-item">
              <div className="menu-description">
                <h2 className="media-heading" text-align="left">
                  {this.props.item.name.toUpperCase()}
                </h2>

                <h3 className="menu-price">${this.props.item.price}</h3>

                <h3 className="menu-text">{this.props.item.style}</h3>

                <div className="colors">{this.makeColorButtons()}</div>
                <p className="menu-text">Color: {this.state.color}</p>

                <div className="sizes">{this.makeSizeButtons()}</div>
                <p className="menu-text">Size: {Sizes.get(this.state.size)}</p>

                <div className="quantity-section">
                  <h3>Quantity</h3>
                  <QuantityBar
                    useClass="quantity-bar"
                    type="number"
                    step="1"
                    item={this.props.item}
                    updateListItem={this.selectQuantity.bind(this)}
                  />
                </div>

                <div>
                  <button className="edit-submit btn" onClick={this.updateItem}>
                    SUBMIT
                  </button>
                </div>
              </div>
              <img
                className="menu-image"
                src={Icons.get(this.props.item.key)}
                alt="product"
              />
            </div>
            <div style={footerStyle} />
          </div>
        </div>
      );
    } else return null;
  }

  makeColorButtons() {
    const colors = [...this.props.item.colors];
    const buttons = colors.map(color => {
      const style = {
        backgroundColor: color,
        height: '20px',
        width: '5rem',
        border: 'none',
        margin: '.2rem'
      };
      return (
        <button
          onClick={() => {
            this.selectColor(color);
          }}
          key={color}
          style={style}
        />
      );
    });
    return buttons;
  }

  makeSizeButtons() {
    const sizes = [...this.props.item.sizes];
    const buttons = sizes.map(size => {
      const style = {
        backgroundColor: 'light-grey',
        height: '3rem',
        width: '5rem',
        border: 'none',
        margin: '.2rem'
      };
      return (
        <button
          onClick={() => {
            this.selectSize(size);
          }}
          key={size}
          style={style}
        >
          {size}
        </button>
      );
    });
    return buttons;
  }
}
