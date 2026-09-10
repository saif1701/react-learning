import { useEffect, useState } from "react";
import cart from "./cart";

const Carts = () => {
  // const [products, setProducts] = useState(cart);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const addCart = (id) => {
    const prod = cart.find((item) => item.id === id);
    console.log(prod);
    if (!prod) return;
    setCartList((prev) => {
      const exists = prev.some((item) => item.id === id);
      if (exists) {
        return prev.map((item) => (item.id === id ? { ...item, sq: 1 } : item));
      }
      return [...prev, { ...prod, sq: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCartList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, sq: item.sq + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartList((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, sq: item.sq - 1 } : item))
        .filter((item) => item.sq > 0),
    );
  };

  const TotalPrice = cartList.reduce((acc, curr) => {
    return acc + curr.sq * curr.price;
  }, 0);

  return (
    <>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => addCart(item.id)}>Add to cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart : {TotalPrice.toFixed(2)}</h3>

      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <button
              disabled={item.sq === item.quantity}
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            {item.sq}
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carts;
