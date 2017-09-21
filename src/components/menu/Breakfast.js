import React from 'react';

var Breakfast = React.createClass({
  addToCart: function() {
    this.props.addToCart(this.props.details);
  },
  render: function() {
    let item = this.props.details;
    return (
      <div className="Product" onClick={this.addToCart}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  }
});

export default Breakfast;