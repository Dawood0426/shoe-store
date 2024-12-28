"use client";
import style from "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/CreateSlice/slice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productSlice.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.src} alt={item.name} className="cart-item-img" style={{ maxHeight: "150px", objectFit: "contain" }} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button
                    className="btn-remove"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
