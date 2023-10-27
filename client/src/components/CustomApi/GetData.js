import React, { useState } from "react";

export default function GetData() {
  const [apiResponse, setApiResponse] = useState("");
  const [name, setName] = useState("");

  const callApi = async () => {
    const response = await fetch(`http://localhost:9000/getTestApi/name/${name}`);
    const data = await response.json();
    setApiResponse(data);
  };

  const click = () => {
    callApi();
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="What is your name?"
        type="text"
        value={name}
        onChange={onChange}
      />
      <button type="submit" onClick={click}>
        Submit
      </button>
      <p>{apiResponse.name} {apiResponse.id}</p>
    </div>
  );
}
