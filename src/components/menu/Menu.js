import React from 'react';
import Cart from './Cart';
import Breakfast from './Breakfast';

var Menu = React.createClass({
  getItems: function() {
    // some request here
    return [{id: 1, name: "Lemon Ricotta Pancakes", description: "Tender pancakes with lemon ricotta base. Topped with ghee and rasberry syrup.", price: 8.99},
            {id: 2, name: "Egg Croissant", description: "Scrambled egg mixed with bacon, cheese, and chives. Served between our homemade croissant.", price: 7.49},
            {id: 3, name: "Biscuits and Gravy", description: "Flaky biscuits topped with the creamiest, meatiest gravy you've tried.", price: 7.49},
            {id: 4, name: "Donut Platter", description: "A delicious assortment of freshly baked cake donuts. Flavors include maple, buttermilk, blueberry, and pumpkin.", price: 6.49},
            {id: 5, name: "Tomato Soup and Grilled Cheese", description: "Creamy tomato soup served with crispy gooey slices of grilled cheese.", price: 7.49},
            {id: 6, name: "Tuna Melt", description: "Fresh albacore tuna served on grilled sourdough bread. Pickle on the side.", price: 8.99},
            {id: 7, name: "Lobster Mac N Cheese", description: "Bowtie macaroni. Five cheese sauce. Lobster. Enough said!", price: 8.99},
            {id: 8, name: "Greek Pita Wrap", description: "Pita pocket stuffed with marinated veggies, feta cheese, and tzatziki.", price: 6.49},
            {id: 9, name: "BLT Twist", description: "Crispy applewood bacon, avacado, lettuce, tomato, mayo, and jalapeno spread served between sourdough toast.", price: 7.49},
            {id: 10, name: "Shepards Pie", description: "Creamy layers of ground beef, corn, peas, mashed potatoes, and gravy", price: 8.99},
            {id: 11, name: "Zucchini Lasagna", description: "Think lasagna, minus noodles plus zucchini.", price: 7.49},
            {id: 12, name: "Salmon Fish N Chips", description: "Alaskan salmon fried in homemade batter. Served with coleslaw and our special sauce.", price: 8.99},
            {id: 13, name: "Peach Cobbler", description: "Sliced peached topped with oatmeal crumble. Baked to perfection. Served with snickerdoodle ice cream.", price: 3.49},
            {id: 14, name: "Root Beer Float", description: "Three scoops of vanilla ice cream with our home brewed root beer.", price: 3.49},
            {id: 15, name: "Fondue Platter", description: "Melted dark chocolate with pretzels, angel food cake, and strawberries.", price: 3.49},
            {id: 16, name: "Peanut Butter Sunday", description: "A bowl of vanilla ice cream topped with melted peanut butter.", price: 3.49}];
  },
  getInitialState: function() {
    return {
      items: this.getItems(),
      cart: [],
      meals: ["Breakfast", "Lunch", "Dinner", "Dessert"]
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
            {this.state.items.map((item, i) => {
              /* i++;
              if (i % 4 === 0) {
                var j = 0;
              return {this.state.meals[j++]}
              } */
              return <Breakfast details={item} addToCart={this.addToCart} />
            })}
          </div>
      </div>
    );
  }
});

export default Menu;