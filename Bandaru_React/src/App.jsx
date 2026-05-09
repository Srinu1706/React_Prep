
import './App.css'
import React from 'react'

function App() {

const product = {
  name: "Apple iPhone 13 Pro Max",
  price: 1099,
  Category: "Smartphones",

}
  // return (
  //  <div id='product'>
  //   <h1>{product.name}</h1>
  //   <h2>Price: ${product.price}</h2>
  //   <h3>Category: {product.Category}</h3>
  //  </div>
  // )

  return React.createElement(
    React.Fragment,
    // "div",
    null,
    React.createElement("h1", null,product.name),
    React.createElement("h2", null,`Price : ${product.price}`),
    React.createElement("p", null,`Category: ${product.Category}`)
    
  )
}

export default App
