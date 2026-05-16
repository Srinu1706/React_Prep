import React from "react";

const ProductsA = () => {
  const products = [
    // {
    //   id: 1,
    //   name: "iPhone 15",
    // },
    // {
    //   id: 2,
    //   name: "Samsung S24",
    // },
  ];
  return (
    <div>
      {products.length === 0 ? (
        <h1>No products available</h1>
      ) : (
        products.map((product) => {
          return <h1>{product.name}</h1>;
        })
      )}
    </div>
  );
};

export default ProductsA;
