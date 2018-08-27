import React, { Component } from 'react';
import EditMenu from './EditMenu';
import Icons from '../data/Icons';

/*
  The Item column in the ShoppingCartTable. Has a child component
  for the menu to edit (EditMenu). The state that determines whether
  or not EditMenu shows is stored in this Component.
*/

class ShoppingCartItem extends Component {
  componentDidMount() {
    this.setState({ show: false });
  }

  toggleMenu() {
    const show_menu = this.state.show === true ? false : true;
    this.setState({ show: show_menu });
  }

  updateItems() {
    this.toggleMenu();
  }

  updateListItem(item) {
    this.props.updateListItem(item);
  }

  render() {
    if (this.state) {
      return (
        <div className="item">
          <img
            className="item-image"
            src={Icons.get(this.props.item.key)}
            alt="product"
          />
          <div className="description">
            <h4 className="media-heading" text-align="left">
              {this.props.item.name.toUpperCase()}
            </h4>
            <p className="description-grey">Style #: {this.props.item.style}</p>
            <p className="description-grey">Color: {this.props.item.color}</p>

            <div>
              <div className="menu-options">
                <span
                  className="menu-options-button"
                  onClick={() => this.toggleMenu()}
                >
                  EDIT |{' '}
                </span>
                <span onClick={() => this.props.remove(this.props.item.key)}>
                  X REMOVE |
                </span>
                <span> SAVE FOR LATER </span>
              </div>
              <EditMenu
                show={this.state.show}
                item={this.props.item}
                toggleMenu={this.toggleMenu.bind(this)}
                updateListItem={this.updateListItem.bind(this)}
              />
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default ShoppingCartItem;
