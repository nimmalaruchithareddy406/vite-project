function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h1>Cart Page</h1>

      <div className="card">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <p>
                  {item.name} - ₹{item.price}
                </p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}

            <h3>Total: ₹{total}</h3>
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;