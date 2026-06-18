const Cart = ({ cart = [] }) => {
    const total = () => {
  return cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
}
    return (
        <div>
            <h2>My Cart</h2>

            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            ))}

<h2>Total:${total().toFixed(2)}</h2>
        </div>
    );
};

export default Cart;