import React from "react";

export const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />;
      <div>
        <div className="product-name">{product.name}</div>
        <button>Objednat</button>
      </div>
    </div>
  );
};
