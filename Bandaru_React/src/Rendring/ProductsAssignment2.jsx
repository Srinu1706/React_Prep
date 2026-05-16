import React from "react";

const ProductsAssignment2 = () => {
  const isLogined = false;
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
    },
    {
      id: 2,
      name: "iPhone 15",
    },
  ];

  return(
<div>
    {products.length === 0 ? (
      <h1>No products are avalible</h1>
    ) : isLogined ? (
      products.map((product) => {
        return <h1>{product.name}</h1>;
      })
    ) : (
      <h1>Please login to see the products</h1>
    )}
  </div>
  )
  
};

export default ProductsAssignment2;
