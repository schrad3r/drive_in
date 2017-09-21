import React from 'react';

var Cart = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },
  openCart: function() {
    this.setState({
      open: !this.state.open
    })
  },
  render: function() {
    return (
      <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
        <p className="Title">Cart</p>
        <div>
        {this.props.cart.length > 0 ? this.props.cart.map((item) => {
          return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
        </div>
      </div>
    );
  }
});

export default Cart;