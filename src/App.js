import React, { Component } from 'react';
import propTypes from 'prop-types';


const PropsCheckComp = (props) => {
return (<div> 
  {props.name}
  {props.children}
  </div>)
}

PropsCheckComp.propTypes = {
  name: propTypes.string,
  children: propTypes.string

}

class App extends Component {
  render() {
    console.log("calling render")
    return (
      <div>
        <PropsCheckComp name="rishabh" > Demo </PropsCheckComp>
      </div>
    ) 
  }
}

export default App;