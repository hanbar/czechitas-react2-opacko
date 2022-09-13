import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <div className="product-name">{product.name}</div>
    </Link>
  );
};
