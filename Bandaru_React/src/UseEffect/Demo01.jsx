import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo01 = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        SetProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            {/* <img src={product.image} alt={product.title} width="100" /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Demo01;
