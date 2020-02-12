import React, { Component, PureComponent } from 'react';

class App extends PureComponent {
  constructor() {
    super()
    console.log('First Lifecycle Method - Constructor')
    this.state = {
      score: 1
    }
  }
  componentDidMount() {
    console.log("component did mount")
    setInterval(() => {
      this.setState(() => {
        return {score: 1}
      })
    }, 2000);
  }

  render() {
    console.log("calling render")
    return (
      <div>
        <h1>React Main Page</h1>
        {this.state.score}
      </div>
    ) 
  }
}

export default App;