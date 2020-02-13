import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Prompt } from 'react-router-dom';


const Main = (props) => {
  console.log('Loading Main Route');
  return (<h2>This is Main Page</h2>);
}

const Profile = (props) => {
  console.log('Loading Profiles Route')
  return (<h1>This is Profile page</h1>);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  loginLogout = () => {
    console.log(this.state.isLoggedIn);
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  render() {
    console.log("calling render")
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle = {
                 { color: 'red' }
              }>Main Page</NavLink>
            </li>
            <li>
              <NavLink to="/profile" exact activeStyle = {
                { color: 'red'}
              }>Profile page</NavLink>
            </li>
          </ul>
          <Prompt 
          when = {!this.state.isLoggedIn} 
          message = { (location) => {
            return location.pathname.endsWith('/profile') ? 'Are You Sure?' : true
          }}/>
          <Route exact path="/" component = { Main } />
          <Route exact path="/profile" exact strict render = { () => (
            this.state.isLoggedIn ? (< Profile />) : (<Redirect to = "/" />)
          )} />
          <input type="button" value = { this.state.isLoggedIn ? 'Log Out' : 'Log In'}
            onClick = {this.loginLogout} />
        </div>
      </Router>
    ) 
  }
}

export default App;