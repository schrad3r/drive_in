import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="name border">Dine N Dash</h1>
            <Link to={"/About"}><button className="header_button">About</button></Link>
            <Link to={"/Menu"}><button className="header_button">Menu</button></Link>
            <Link to={"/"}><button className="header_button">Home</button></Link>
        </div>
      </div>
    );
  }
}