import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState('loading');

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`)
      .then((response) => response.json())
      .then((payload) => setProduct(payload));
  }, []);

  return (
    <main>
      {product === 'loading'
        ? <p>loading...</p>
        : <ProductDetail product={product} />}
    </main>
  );
};
