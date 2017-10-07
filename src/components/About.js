import React, {Component} from 'react';
import Header from './menu/Header';
import Cart from './menu/Cart';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
      <div className="about">
        <div>
          <h1 className="page_header">You are what you eat.</h1>
          <h1 className="about_sub_header">We firmly believe this. But, we also know you are so much more than that. </h1>
          <p className="about_content">You're a college student with a tight budget. A busy dad with two jobs.
          A single mom short on time. Whatever your story is, you deserve a meal
          that's healthy and affordable. Even when you're in a hurry.</p>
          <h1 className="about_bottom_header">That's what we're here for.</h1>
        </div>
      </div>
      </div>
    )
  }
}