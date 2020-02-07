import React, { Component } from 'react';
import ProductsCatalog from './containers/ProductsCatalog';

class App extends Component {
  render() {
    return (
      <div >
        React Testing App
        <ProductsCatalog product = {
      {
        id: 1,
        desc: 'Guide to Js'
      } }/>
      </div>
    ) 
  }
}

export default App;