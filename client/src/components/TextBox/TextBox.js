import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "./TextBox.css";

const FancyButton = ({ onClick, buttonText }) => {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

// function usePlaceholder(value) {
//   const [placeholderText, setPlaceholderText] = useState(value);

//   function handlePlaceholderChange(e) {
//     setPlaceholderText(e.target.value)
//   }

//   const inputProps = {
//     value: placeholderText,
//     onChange: handlePlaceholderChange
//   }

//   return inputProps;
// }

//custom useEffect hook
function useSpecialEffect(fnct, deps) {
  const isFirstRun = useRef(true);
  const oldDeps = useRef(deps);

  const dependenciesHaveChanged = oldDeps.current.some((dep, index) => {
    console.log(dep, deps[index]);
    return dep !== deps[index];
  });

  console.log({ dependenciesHaveChanged });
  if (dependenciesHaveChanged || isFirstRun.current) {
    console.log("running function");
    oldDeps.current = deps;
    fnct();
  }
  isFirstRun.current = false;
}

function TextBox({ onClick }) {
  const [data, setData] = useState();
  const [obj, setObj] = useState({});

  useSpecialEffect(() => {
    console.log(obj);
  }, [data]);

  useEffect(() => {
    console.log("hello");
  }, [data]);

  const comment = (event) => {
    setData(event.target.value);
    setObj(obj);
  };

  // so now we need to wire up an onClick in the tweetbox component
  const click = () => {
    const tweet = { body: data, time: new Date().toLocaleString() };
    //call onClick here
    onClick(tweet);
    setData("");
  };

  // const initialPlaceholderText = usePlaceholder("Hello")

  // now lets pass in a prop to this component `onClick`
  return (
    <div>
      <div>
        {/* <input {...initialPlaceholderText}/> */}
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
    </div>
  );
}

export default TextBox;
