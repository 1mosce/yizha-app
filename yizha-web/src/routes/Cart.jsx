import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyCart } from "../features/counterSlice";
import "../styles/routes/Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.counter);
  const { total } = useSelector((state) => state.counter);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cart);
  }, [cart]);

  if (data != null) {
    return (
      <div className="wrapper">
        <h1 className="title">Cart</h1>
        <div className="cart-container">
          {data.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>Your cart is empty...</h3>
          ) : null}
          {data.map((item) => (
            <div className="cart-container-element">
              <div className="cart-container-element-logo">
                <img src={item.logo} />
              </div>
              <div className="cart-container-element-info">
                <h3>{item.name}</h3>
                <p>{item.weight}g</p>
              </div>
              <div className="cart-container-element-price">
                <h3>{item.price}$</h3>
              </div>
            </div>
          ))}
          <div className="cart-container-total">
            <h3>Total to pay: {total}$</h3>
            {data.length === 0 ? null : (
              <button
                className="cart-container-total-pay"
                onClick={() => {
                  alert("Order Is Success!");
                  dispatch(emptyCart());
                }}
              >
                Pay
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
