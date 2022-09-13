import React from "react";

export const ProductImage = ({ image }) => {
  return <img src={image.image} alt={image.name} />;
};
