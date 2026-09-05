import { useState } from "react";
import cart from "./cart";
import { useEffect } from "react";

const AddToCart = () => {
  const [products, setProducts] = useState(
    cart.map((product) => ({
      ...product,
      selectQuantity: 1,
    })),
  );
  const [addCart, setAddCart] = useState([]);
  useEffect(() => {
    console.log(addCart);
  }, [addCart]);

  const increaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, selectQuantity: product.selectQuantity + 1 }
          : product,
      ),
    );
  };

  const handleCart = (id) => {
    const product = products.find((product) => product.id === id);

    if (!product) return;

    setAddCart((prev) => {
      if (prev.some((item) => item.id === id)) {
        return prev;
      }

      return [...prev, product];
    });
  };

  return (
    <>
      <div>
        Products,<span>Total:{products.length}</span>
        <div className="product-wrapper">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-details">
                <p className="product-title">{product.title}</p>
                <p>
                  Quantity:{product.quantity} / Price : {product.price}
                </p>
              </div>
              <div className="product-button">
                <button>-</button>
                <button
                  disabled={product.selectQuantity === product.quantity}
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="add-to-cart"
                onClick={() => handleCart(product.id)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
