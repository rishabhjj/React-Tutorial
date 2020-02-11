import React, { Fragment } from 'react';


const Sample = (props) => {
  return (
    <>
    <div>Fragment1</div>   
    <div>Fragment2</div>  
    </>
  )
}

const View = (props) => {
  console.log(props);
  return (
    <div>
      <Sample />
    </div>    
  )
}
export default View;