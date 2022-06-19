import { useEffect } from "react";
import "../styles/routes/Menu.scss";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId } from "../features/counterSlice";

export default function Menu() {
  const [restaraunts, setRestaraunts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setRestaraunts([]);
    axios.get("https://localhost:7262/Restaraunt").then((res) => {
      setRestaraunts(res.data);
    });
  }, []);

  function generateLink(itemId) {
    var generatedLink = `/restaraunt/${itemId}`;
    return generatedLink;
  }

  return (
    <main className="wrapper">
      <h2 className="main-title">Restaraunt list</h2>
      <div className="restaraunts-wrapper">
        {restaraunts.map((item, index) => (
          <div key={index} className="restaraunt-position">
            <div className="restaraunt-position-logo">
              <img src={item.logo} alt="restarauntLogo" />
            </div>
            <div className="restaraunt-position-name">
              <h3>{item.name}</h3>
              <p>{item.address}</p>
            </div>
            <div className="restaraunt-position-rating">
              <h3>Rating</h3>
              <p>{item.rating} out of 5</p>
            </div>
            <div className="restaraunt-position-menu">
              <button
                onClick={() => {
                  dispatch(setId(item.id));
                }}
              >
                <Link to={generateLink(item.id)} className="link">
                  Order
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
