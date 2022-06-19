import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/counterSlice";
import "../styles/routes/Restaraunt.scss";

export default function Restaraunt() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.counter);
  const [data, setData] = useState();

  const getData = async () => {
    const restaraunt = await axios.get(
      `https://localhost:7262/Restaraunt/${id}`
    );
    setData(restaraunt.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data != null) {
    return (
      <div className="wrapper">
        <h1 className="title">{data.name}</h1>
        <div className="logo">
          <img src={data.logo} />
        </div>
        <h3 className="title-menu">Menu</h3>
        <div className="menu-wrapper">
          {data.menu.map((item,index) => (
            <div className="menu-wrapper-element" key={index}>
              <div className="menu-wrapper-element-logo">
                <img src={item.logo} />
              </div>
              <h3 className="menu-wrapper-element-title">{item.name}</h3>
              <div className="menu-wrapper-element-info">
                <p>{item.weight}g</p>
                <p>{item.rating} out of 5 rating</p>
              </div>
              <h3 className="menu-wrapper-element-price">{item.price}$</h3>
              <button
                className="menu-wrapper-element-order"
                onClick={() => {
                  let payload = {
                    id:item.id,
                    logo:item.logo,
                    name:item.name,
                    weight:item.weight,
                    price:item.price
                  }
                  alert("Item added successfully!")
                  dispatch(addItemToCart(payload));
                }}
              >
                Order
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
