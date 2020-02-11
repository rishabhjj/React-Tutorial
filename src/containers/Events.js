import React, { Component } from 'react'

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      storeName: 'Rishabh Mall'
    }
  }
  updateStoreName = (name) => {
    this.setState({
      storeName: name
    })
  }
  onChange = (e) => {
    this.setState({
      storeName: e.target.value
    })
  }
  render() {
    return (
      <div>
        {this.state.storeName}
        <br />

        <button onClick = {() => {this.updateStoreName('Rishabh Retail Store')}}>Update Store Name using Anonymous Function</button>
        <br />
        <button onClick = {() => {this.updateStoreName('Rishabh ECommerce Platform')}}>Update Store Name using Anonymous Function</button>
        <hr />
        <input type="text" value = {this.state.storeName} onChange = {this.onChange}></input>
      </div>
    )
  }
}
