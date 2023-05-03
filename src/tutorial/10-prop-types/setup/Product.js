import React from 'react';
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg"
// if we do not have the image property we did not want to show that product 

const Product = ({image,name,price}) => {
  // check the props whats happenig with props
  console.log(image,name,price);
  const url = image && image.url;
  return <article className='product'> 
    <h4>{name}</h4>
    <img src={url || defaultImage} alt={name} />
    <p>Price {price || 3.99} $</p>

    {/* <h4>product</h4> */}
  </article>;
};

export default Product;

Product.prototype ={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}
// default props first method
// Product.defaultProps ={
//   name: "default name",
//   price:3.39,
//   image: defaultImage
// }