import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
      .then((response) => response.json())
      .then((payload) => setProducts(payload));
  }, []);

  return (
    <main>
      <section>
        <h1>Aktuální nabídka</h1>
        <p>
          Nejnovější nové produkty od předních českých designérů.
          <br /> Doprava zdarma až k vám domů, na cenu nehleďte.
        </p>
      </section>
      <section className="container">
        {products.map((product) => <Product key={product.id} product={product} />)}
      </section>
    </main>
  );
};
