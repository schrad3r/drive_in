import React from 'react';
import Cart from './Cart';
import Breakfast from './Breakfast';

var Menu = React.createClass({
  getItems: function() {
    // some request here
    return [{id: 1, name: "Lemon Ricotta Pancakes", description: "Tender pancakes with lemon ricotta base. Topped with ghee and rasberry syrup.", price: 8.99},
            {id: 2, name: "Egg Croissant", description: "Scrambled egg mixed with bacon, cheese, and chives. Served between our homemade croissant.", price: 7.49},
            {id: 3, name: "Biscuits and Gravy", description: "Flaky biscuits topped with the creamiest, meatiest gravy you've tried.", price: 7.49}];
  },
  getInitialState: function() {
    return {
      items: this.getItems(),
      cart: []
    }
  },
  addToCart: function(item) {
    var found = false;
    var updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    
    if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }
    
    this.setState({
      cart: updatedCart
    });
  },
  render: function(){
    return (
      <div>
        <nav>
          <h3>Products</h3>
          <Cart cart={this.state.cart} />
        </nav>
          <div className="Products">  
            {this.state.items.map((item) => {
              return <Breakfast details={item} addToCart={this.addToCart} />
            })}
          </div>
      </div>
    );
  }
});

export default Menu;