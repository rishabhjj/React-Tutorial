import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    console.log('First Lifecycle Method - Constructor')
    this.state = {
      title: 'Learning Lifecycle Methods'
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        title: 'tesing'
      })
    }, 10000);

  }
  // componentDidMount() {
  //   console.log("component Did mount");
  //   // this.setState({
  //   //   title: 'Learned Component Did Mount'
  //   // })
  // }
  // customEvent = () => {
  //   this.setState({
  //     title: 'Updating Title With Custom Click'
  //   })
  // }
  // componentWillUpdate() {
  //   // this.setState({
  //   //   title: 'Component Will Update'
  //   // })
  // }
  // shouldComponentUpdate(nextProps, nextstate) {
  //   // console.log(nextProps, nextstate);
  //   return true;
  // }
  // componentDidUpdate(previousProps, previousState) {
  //   console.log('Component Did Update', this.state)
  //   if (this.state.title !== previousState.title) {
  //     this.setState({
  //       title: 'Component Will Update'
  //     })
  //   }
  // }
  // componentWillUnmount() {
  //   console.log('component will Unmount');
  // }
  // unmount = () => {
  //   this.setState({
  //     title: 'unmount'
  //   })
  // }
  render() {
    console.log("calling render")
    console.log(this.state);
    if (this.state.title === 'unmount') {
      console.log("com")
      return (<div/>);
    }
    return (
      <div>
        <h1>React Main Page</h1>
        {this.state.title}
        <br />
        <button onClick= {this.customEvent}>Change Title</button>
        <button onClick = {this.unmount}> UnMount</button>
      </div>
    ) 
  }
}

export default App;