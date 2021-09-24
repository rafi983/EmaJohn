import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const { img, name, seller, price, stock, features, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <div>
          <h5 className="pd-name">{name}</h5>
          <p>by {seller}</p>
          <h2>{price}$</h2>
          <p>only {stock} left in stock - order soon</p>
          <button
            className="buy-btn"
            onClick={() => props.handleAddToCart(props.product)}
          >
            {cartIcon} add to cart
          </button>
        </div>

        <div>
          <div className="product-feature">
            <Rating
              className="rating"
              initialRating={star}
              readonly
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />
            <h3>Features</h3>
            {features.map((feature) => (
              <Feature feature={feature}></Feature>
            ))}
          </div>
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
            {description}: <span className="pd-value">{value}</span>
          </li>
        </small>
      </ul>
    </div>
  );
};
export default Product;
