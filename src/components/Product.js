import React from 'react';

const Products = (props) => {
  return <div>Product Id:  {props.product.id} || Product Description: {props.product.desc}</div>
}
export default Products;