import React from "react";
import { useState, useEffect } from "react";
import "./TextBox.css";

const FancyButton = ({ onClick, buttonText }) => {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

function TextBox({ onClick }) {
  const [data, setData] = useState();
  const [obj, setObj] = useState({});

  useEffect(() => {
    console.log("hello");
  }, [data]);

  useEffect(() => {
    console.log("hello obj");
  }, [obj]);

  const comment = (event) => {
    setData(event.target.value);
    // obj.text = event.target.value;
    const newObj = {text:event.target.value}
    setObj(newObj);
  };

  // so now we need to wire up an onClick in the tweetbox component
  const click = () => {
    const tweet = { body: data, time: new Date().toLocaleString() };
    //call onClick here
    onClick(tweet);
    setData("");
  };

  // now lets pass in a prop to this component `onClick`
  return (
    <div>
      <textarea
        className="text-box"
        type="text"
        placeholder="Type here"
        onChange={comment}
        value={data}
      />
      <div>
        <FancyButton onClick={click} buttonText="Click this button" />
      </div>
    </div>
  );
}

export default TextBox;
