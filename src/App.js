import React, { Component } from 'react';
import View from './components/Fragment';
class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div >
        <View />
      </div>
    ) 
  }
}

export default App;