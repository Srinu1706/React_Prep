import React from "react";

const Assignment_S = () => {
  const products = [
    {
      name: "Laptop",
      price: 500,
      isInStock: true,
    },
    {
      name: "Phone",
      price: 300,
      isInStock: false,
    },
    {
      name: "Headphones",
      price: 50,
      isInStock: true,
    },
  ];
  let cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    margin: "10px",
    width: "200px",
    textAlign: "center",
  };

  let containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };
  return (
    <div style={containerStyle}>
      {products.map((product, index) => (
        <div  style={cardStyle}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p style={{color: product.isInStock ?"green":"red"}}
          >In Stock: {product.isInStock ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default Assignment_S;
