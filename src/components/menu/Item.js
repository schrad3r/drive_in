import React, {Component} from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="Product">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </div>
    )
  }
}