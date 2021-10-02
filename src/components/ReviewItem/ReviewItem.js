import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { img, name, price, seller, quantity, key } = props.product;

  const { handleRemove } = props;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="pd">
        <div style={{ marginLeft: "2rem" }}>
          <h4 style={{ color: "blue" }}>{name}</h4>
          <p>Price: {price}</p>
          <p>sold by: {seller}</p>
          <p>Quantity: {quantity}</p>
          <button onClick={() => handleRemove(key)} className="btn-regular">
            Remove
          </button>
        </div>

        <div className="product-shipping">
          <h4>Shipping options</h4>
          <div className="shipping-option">
            <input type="radio" id="free" name="fav_language" value="FREE" /> {" "}
            <label for="free">8-10 business days</label>
            <span style={{ display: "block", color: "gray" }}>
              $0 - Free Shipping
            </span>
            <input
              type="radio"
              id="regular"
              name="fav_language"
              value="REGULAR"
            />
              <label for="regular">5-7 business days</label>
            <span style={{ display: "block", color: "gray" }}>
              $3.99 - Regular Shipping
            </span>
            <input
              type="radio"
              id="standard"
              name="fav_language"
              value="STANDARD"
            />
              <label for="standard">2-4 business days</label>
            <span style={{ display: "block", color: "gray" }}>
              $7.99 - Standard Shipping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
