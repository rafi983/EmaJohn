import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h2 className="order-summary">Order summary</h2>
      <h3 className="items-ordered">
        Items ordered: <span className="items-count">{totalQuantity}</span>
      </h3>
      <div className="items-charge">
        <p>
          <small>Items: </small> <span>{totalQuantity}</span>
        </p>
        <p>
          <small>Shipping & Handling:</small> $<span>{shipping}</span>
        </p>
        <p>
          <small>Total before tax:</small> $<span>{total.toFixed(2)}</span>
        </p>
        <p>
          <small>Estimated Tax:</small> $<span>{tax.toFixed(2)}</span>
        </p>
        <h2 className="total-amount">
          Order total: $<span>{grandTotal.toFixed(2)}</span>
        </h2>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
