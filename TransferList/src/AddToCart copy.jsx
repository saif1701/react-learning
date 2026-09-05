import { useState } from "react";
import cart from "./cart";

const AddToCart = () => {
  const [products, setProducts] = useState(cart);
  const [addCart, setAddCart] = useState([]);

  const addToCart = (id) => {
    const product = cart.find((product) => product.id === id);
    if (!product) return;
    setAddCart((prev) => {
      const alreadyAdded = prev.some((product) => product.id === id);

      if (alreadyAdded) return prev;

      return [
        ...prev,
        {
          ...product,
          selQ: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setAddCart((prev) =>
      prev.map((product) =>
        product.id === id && product.selQ < product.quantity
          ? {
              ...product,
              selQ: product.selQ + 1,
            }
          : product,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setAddCart((prev) =>
      prev.map((product) =>
        product.id === id && product.selQ > 1
          ? {
              ...product,
              selQ: product.selQ - 1,
            }
          : product,
      ),
    );
  };

  const totalPrice = addCart.reduce(
    (total, product) => total + product.price * product.selQ,
    0,
  );
  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>Available: {product.quantity}</p>

            <button onClick={() => addToCart(product.id)}>Add to cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>

        {addCart.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>₹{product.price * product.selQ}</p>

            <button
              disabled={product.selQ === 1}
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>

            <span>{product.selQ}</span>

            <button
              disabled={product.selQ === product.quantity}
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        ))}
        <p>Total Price : {totalPrice}</p>
      </div>
    </>
  );
};

export default AddToCart;
