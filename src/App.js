import React, { Component } from 'react';
import ProductsCatalog from './containers/ProductsCatalog';
import  Vendors from './containers/Vendors';
import Events from './containers/Events';
import Childern from './components/Children';
import Parent from './components/Parent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTitle : 'Learning how React Components Communicate'
    }

  }
  changeTitle = () => {
    this.setState({
      currentTitle: 'Learned React Components Communication'
    })
  }
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
      {/* <Events /> */}
      <Parent currentTitle = {this.state.currentTitle} changeTitle = {this.changeTitle} />
      </div>
    ) 
  }
}

export default App;