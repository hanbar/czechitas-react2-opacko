import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductImage } from "../components/ProductImage";
import { ProductName } from "../components/ProductName";

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`)
      .then((response) => response.json())
      .then((payload) => setProduct(payload));
  }, []);

  return (
    <main>
      <div className="product-detail">
        <ProductImage image={product} />
        <div>
          <ProductName title={product.name} />
          <button>Objednat</button>
        </div>
      </div>
    </main>
  );
};
