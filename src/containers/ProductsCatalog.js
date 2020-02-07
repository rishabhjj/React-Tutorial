import React, { Component } from 'react'
import Products from '../components/Product';

export default class ProductsCatalog extends Component {
  render() {
    return (
      <div>
        <hr />
        Displaying All Products list
        <hr />
        <Products product = {this.props.product}/>
      </div>
    )
  }
}
