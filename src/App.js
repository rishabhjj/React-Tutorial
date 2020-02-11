import React, { Component } from 'react';
import ProductsCatalog from './containers/ProductsCatalog';
import  Vendors from './containers/Vendors';
import Events from './containers/Events';
class App extends Component {
  render() {
    return (
      <div >
        {/* React Testing App
        <ProductsCatalog product = {
      {
        id: 1,
        desc: 'Guide to Js'
      } }/> */}
      {/* <Vendors /> */}
      <Events />
      </div>
    ) 
  }
}

export default App;