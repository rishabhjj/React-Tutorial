import React, { Component } from 'react';
import ProductsCatalog from './containers/ProductsCatalog';
import  Vendors from './containers/Vendors';
import Events from './containers/Events';
import Childern from './components/Children';
import Parent from './components/Parent';
import Keys from './components/Keys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: 'Rishabh',
          occupation: 'Full Stack Dev'
        },
        {
          name: 'Rahul',
          occupation: 'Content Writer'
        },
        {
          name: 'Raj',
          occupation: 'UX'
        }
      ]
    }
  }
  deleteEmployee = (index, e) => {
    const employees = JSON.parse(JSON.stringify(this.state.employees));
    employees.splice(index, 1);
    this.setState({ employees: employees})
  }
  render() {
    return (
      <div >
        <ul>
          {
            this.state.employees.map((user, i) => {
              return (<Keys key = {i} name = {user.name} occupation = {user.occupation} delete = {this.deleteEmployee}/>)
            })
          }
        </ul>
      </div>
    ) 
  }
}

export default App;