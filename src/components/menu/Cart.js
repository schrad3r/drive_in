import React, {Component} from 'react';
import cartImg from "../../cart_icon.png";
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  
  render() {
    return (
      <div className="dropdown">
        <Link to={"/Checkout"}><img className="cart_button dropbtn" src={cartImg}/></Link>
      <div className="dropdown-content">
        <a>{this.props.cart.length > 0 ? this.props.cart.map((item) => {
          return <p>{item.name} {item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}</a>
      </div>
      </div>
    );
  }
}
