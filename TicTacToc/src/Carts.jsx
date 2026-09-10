import { useEffect, useState, useReducer } from "react";
import cartReducers, { initialState } from "./reducers/cartReducers";
import cart from "./cart";

const Carts = () => {
  // const [products, setProducts] = useState(cart);
  const [cartList, setCartList] = useState([]);

  const [state, dispatch] = useReducer(cartReducers, initialState);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const addCart = (id) => {
    const prod = cart.find((item) => item.id === id);
    if (!prod) return;
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
    // console.log(prod);
    // if (!prod) return;
    // setCartList((prev) => {
    //   const exists = prev.some((item) => item.id === id);
    //   if (exists) {
    //     return prev.map((item) => (item.id === id ? { ...item, sq: 1 } : item));
    //   }
    //   return [...prev, { ...prod, sq: 1 }];
    // });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INC_QUANTITY",
      payload: id,
    });
    // setCartList((prev) =>
    //   prev.map((item) =>
    //     item.id === id ? { ...item, sq: item.sq + 1 } : item,
    //   ),
    // );
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DEC_QUANTITY",
      payload: id,
    });
    // setCartList((prev) =>
    //   prev
    //     .map((item) => (item.id === id ? { ...item, sq: item.sq - 1 } : item))
    //     .filter((item) => item.sq > 0),
    // );
  };

  const TotalPrice = state.cartList.reduce((acc, curr) => {
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
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Remove</button>
      <ul>
        {state.cartList.map((item) => (
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
