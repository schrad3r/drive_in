import React, {Component} from 'react';

export default class Item extends Component {
  addToCart() {
    this.props.addToCart(this.props.details);
  }
  render() {
    return (
      <div className="Product">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
        <button className="add_to_cart" onClick={this.addToCart.bind(this)}>Add To Cart</button>
      </div>
    )
  }
}