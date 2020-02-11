import React from 'react';
import Children from './Children';

const Parent = (props) => {
  return (
    <Children {...props} /> 
  )
}

export default Parent;