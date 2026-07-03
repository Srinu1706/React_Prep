 const getProducts=async()=>{
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        console.log("Products fetched successfully:", products);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
 }

 getProducts().then(products => {
    console.log("Fetched products:", products);
}).catch(error => {
    console.error("Error:", error);
});