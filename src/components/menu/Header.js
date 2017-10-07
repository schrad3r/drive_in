import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="name">DELIGHT</h1>
        <div className="header_buttons">
          <Link to={"/"}><button className="header_button">Home</button></Link>
          <Link to={"/About"}><button className="header_button">About</button></Link>
          <Link to={"/Menu"}><button className="header_button">Menu</button></Link>
        </div>
      </div>
    );
  }
}