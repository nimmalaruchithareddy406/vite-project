function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop destination for mobiles, laptops, accessories and more.</p>
        <button>Shop Now</button>
      </section>

      <h2>Why Choose Us?</h2>

      <div className="products">
        <div className="card">
          <h3>Best Prices</h3>
          <p>We provide quality products at affordable prices.</p>
        </div>

        <div className="card">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and safely.</p>
        </div>

        <div className="card">
          <h3>Secure Payment</h3>
          <p>Your payment details are safe with us.</p>
        </div>
      </div>

      <h2>Featured Products</h2>

      <div className="products">
        <div className="card">
          <h3>Smart Phone</h3>
          <p>Starting from ₹15,000</p>
        </div>

        <div className="card">
          <h3>Laptop</h3>
          <p>Starting from ₹45,000</p>
        </div>

        <div className="card">
          <h3>Headphones</h3>
          <p>Starting from ₹1,500</p>
        </div>
      </div>
    </div>
  );
}

export default Home;