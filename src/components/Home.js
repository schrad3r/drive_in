import React, {Component} from 'react';
import Header from './menu/Header';
import Cart from './menu/Cart';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
      <div className="home">
        <div>
          <h1 className="page_header">Delight in what you eat.</h1>
        </div>
      </div>
      </div>
    )
  }
}