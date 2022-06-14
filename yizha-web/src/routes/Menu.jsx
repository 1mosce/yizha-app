import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Menu() {
  const [restaraunts, setRestaraunts] = useState([]);

  useEffect(() => {
    setRestaraunts([])
    axios
      .get("https://localhost:7262/Restaraunt")
      .then((res) => {
        setRestaraunts(res.data);
      })
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Menu</h2>
      {restaraunts.map((item,index) => (
        <div key={index}>
          {item.name}
        </div>
      ))}
    </main>
  );
}
