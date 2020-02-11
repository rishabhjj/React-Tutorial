import React from 'react';

const Children = (props) => {
  return (
    <button 
    onClick={props.changeTitle}>{props.currentTitle}
    </button>      
  )
}

export default Children;