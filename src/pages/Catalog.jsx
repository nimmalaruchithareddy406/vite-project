function Catalog({ addToCart }) {
  const products = [
    { name: "Mobile Phone", price: 20000 },
    { name: "Laptop", price: 55000 },
    { name: "Headphones", price: 2000 },
    { name: "Smart Watch", price: 3000 },
    { name: "Keyboard", price: 1200 },
    { name: "Mouse", price: 800 },
  ];

  return (
    <div className="page">
      <h1>Product Catalogue</h1>

      <div className="products">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;