import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    clearTheCart();
    history.push("/placeorder");
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            handleRemove={handleRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} className="btn-regular">
          <button onClick={handlePlaceOrder} className="btn-regular">
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
