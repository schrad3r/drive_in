import React, {Component} from 'react';
import Item from './Item';
import Header from './Header';
import Cart from './Cart';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakfast: [
                  {id: 1, name: "Lemon Ricotta Pancakes", description: "Tender pancakes with lemon ricotta base. Topped with ghee and rasberry syrup.", price: 8.99},
                  {id: 2, name: "Egg Croissant", description: "Scrambled egg mixed with bacon, cheese, and chives. Served between our homemade croissant.", price: 7.49},
                  {id: 3, name: "Biscuits and Gravy", description: "Flaky biscuits topped with the creamiest, meatiest gravy you've tried.", price: 7.49},
                  {id: 4, name: "Donut Platter", description: "A delicious assortment of freshly baked cake donuts. Flavors include maple, buttermilk, blueberry, and pumpkin.", price: 6.49},
                  {id: 5, name: "Egg Hash", description: "Skillet hash with eggs, diced potatoes, bell peppers, onion, cheese, and avacado.", price: 6.49},
                  {id: 6, name: "Sweet N Savory Crepes", description: "Housemade crepes filled with egg and ham. Topped with carmerlized apples.", price: 7.49}
                 ],
      lunch: [
              {id: 7, name: "Tomato Soup and Grilled Cheese", description: "Creamy tomato soup served with crispy gooey slices of grilled cheese.", price: 7.49},
              {id: 8, name: "Tuna Melt", description: "Fresh albacore tuna served on grilled sourdough bread. Pickle on the side.", price: 8.99},
              {id: 9, name: "Lobster Mac N Cheese", description: "Bowtie macaroni. Five cheese sauce. Lobster. Enough said!", price: 8.99},
              {id: 10, name: "Greek Pita Wrap", description: "Pita pocket stuffed with marinated veggies, feta cheese, and tzatziki.", price: 6.49},
              {id: 11, name: "Classic Chopped Salad", description: "Chopped romaine lettuce topped with grilled chicken, crumbled bacon, and feta cheese.", price: 6.49},
              {id: 12, name: "Everything Pizza", description: "Thin crust pizza topped with pesto sauce, chicken, jalapeno, and veggies.", price: 7.49}
             ],
      dinner: [
                {id: 13, name: "BLT Twist", description: "Crispy applewood bacon, avacado, lettuce, tomato, mayo, and jalapeno spread served between sourdough toast.", price: 7.49},
                {id: 14, name: "Shepards Pie", description: "Creamy layers of ground beef, corn, peas, mashed potatoes, and gravy", price: 8.99},
                {id: 15, name: "Zucchini Lasagna", description: "Think lasagna, minus noodles plus zucchini.", price: 7.49},
                {id: 16, name: "Salmon Fish N Chips", description: "Alaskan salmon fried in homemade batter. Served with coleslaw and our special sauce.", price: 8.99},
                {id: 17, name: "Corn Chowder", description: "Heathly serving of corn chowder served with homemade rolls and honey butter.", price: 7.49},
                {id: 18, name: "Whiskey Chicken", description: "Whiskey marinated chicken served with mashed potatoes, asparagus, and rolls."}
              ],
      dessert: [
                 {id: 19, name: "Peach Cobbler", description: "Sliced peached topped with oatmeal crumble. Baked to perfection. Served with snickerdoodle ice cream.", price: 3.49},
                 {id: 20, name: "Root Beer Float", description: "Three scoops of vanilla ice cream with our home brewed root beer.", price: 3.49},
                 {id: 21, name: "Fondue Platter", description: "Melted dark chocolate with pretzels, angel food cake, and strawberries.", price: 3.49},
                 {id: 22, name: "Peanut Butter Sunday", description: "A bowl of vanilla ice cream topped with melted peanut butter.", price: 3.49},
                 {id: 23, name: "Pazookie", description: "Chocolate chip cookie base, topped with vanilla ice cream, whipped cream, and caramel syrup.", price: 3.49},
                 {id: 24, name: "French Apple Pie", description: "Apple pie with cinnamon crumble served with vanilla ice cream.", price: 3.49}
               ],
      cart: []
    }
  } 

  addToCart(item) {
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
  }

  render() {
    const breakfast = this.state.breakfast.map((item) => {
      return <Item key={item.id} name={item.name} description={item.description} price={item.price} />
    })

    const lunch = this.state.lunch.map((item) => {
      return <Item key={item.id} name={item.name} description={item.description} price={item.price} />
    })
    
    const dinner = this.state.dinner.map((item) => {
      return <Item key={item.id} name={item.name} description={item.description} price={item.price} />
    })

    const dessert = this.state.dessert.map((item) => {
      return <Item key={item.id} name={item.name} description={item.description} price={item.price} />
    })

    return (
      <div>
        <Header />
         <div className="Products"> 
           <h1 className="menu_title top">Breakfast</h1>
           <div className="menu">
             {breakfast}
           </div>
        
           <h1 className="menu_title">Lunch</h1>
           <div className="menu">
             {lunch}
           </div>
        
           <h1 className="menu_title">Dinner</h1>
           <div className="menu">
             {dinner}
           </div>
        
           <h1 className="menu_title">Dessert</h1>
           <div className="menu">
             {dessert}
           </div>
         </div> 
      </div>
    )
  }
}

/*
var Menu = React.createClass({
  getBreakfast: function() {
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
      breakfast_items: this.getBreakfast(),
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
          <Cart cart={this.state.cart} />
        </nav>
        <h2>Menu</h2>
          <div className="Products"> 

            {this.state.breakfast_items.map((item) => {
              
              return <Breakfast details={item} addToCart={this.addToCart} />
            })}
          </div>
      </div>
    );
  }
});

export default Menu; */