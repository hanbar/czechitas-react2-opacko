import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductImage } from "../components/ProductImage";
import { ProductName } from "../components/ProductName";

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
      .then((response) => response.json())
      .then((payload) => setData(payload));
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
        {data.map((item) => {
          return (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductImage image={item} />
              <ProductName title={item.name} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};
