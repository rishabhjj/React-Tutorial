import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 name ="Rishabh" className = "first">Jain</h1>
        <h2 name htmlFor = "test">Boolean</h2>
        <h2 name= "true">string</h2>
        <h2 name = {false}> Boolean 2</h2>
        <h2 name = {1}> Numeric</h2>
        <div name = { 10 + 20 }> Operations</div>
        <div>
          <div>Testing</div>
        </div>
      </div>
    ) 
  }
}

export default App;