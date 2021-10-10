import React from "react";
import img from "../../images/giphy.gif";

const OrderPlaced = () => {
  return (
    <div>
      <h1>Your order is placed</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default OrderPlaced;
