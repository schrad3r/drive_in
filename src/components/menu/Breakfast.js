import React from 'react';

var  = React.createClass({
  addToCart: function() {
    this.props.addToCart(this.props.details);
  },
  render: function() {
    let item = this.props.details; 
    return (
      <div className="Product" onClick={this.addToCart}>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button >Add To Cart</button>
      </div>
    );
  }
});

export default Breakfast;