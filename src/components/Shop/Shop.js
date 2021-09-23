import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          <h1>products</h1>
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
        <div className="cart-container">
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
