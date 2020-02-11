import React from 'react';

const Keys = (props) => {
  return (
    <li>Name: {props.name} | Occupation: {props.occupation} <button onClick = {props.delete}>delete</button></li>     
  )
}

export default Keys;