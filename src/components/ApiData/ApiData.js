import React, { useEffect, useState } from "react";
import "./ApiData.css";

export default function ApiData() {
  //access the endpoint
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState([]);

  //this will fetch the api data
  const info = async (id) => {
    const response = await fetch(url);

    setData(await response.json());
  };

  // this will store the api data
  useEffect(() => {
    info();
  }, []);

  const click = (id) => {
    setData(data.concat(id))
  };

  return (
    <div className="api--div">
      {data.map((id, index) => {
        return console.log(id, index);
      })}
      <textarea
        className="api--field"
        placeholder="type here for data"
      ></textarea>
      <button onClick={click} className="api--button">
        Click Me
      </button>
    </div>
  );
}
