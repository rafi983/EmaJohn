import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock, features } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <div>
          <h5>{name}</h5>
          <p>by {seller}</p>
          <h2>{price}$</h2>
          <p>only {stock} left in stock - order soon</p>
          <button className="buy-btn">add to cart</button>
        </div>

        <div className="product-feature">
          <h3>Features</h3>
          {features.map((feature) => (
            <Feature feature={feature}></Feature>
          ))}
        </div>
      </div>
    </div>
  );
};

const Feature = (props) => {
  const { description, value } = props.feature;
  return (
    <div>
      <ul>
        <small>
          {" "}
          <li>
            {description}: {value}
          </li>
        </small>
      </ul>
    </div>
  );
};
export default Product;
