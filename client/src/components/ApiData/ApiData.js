import React, { useState } from "react";
import "./ApiData.css";

export default function ApiData() {
  //access the endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  const initialParamValues = {
    field: "",
    fieldValue: "",
  };

  //this defines the input values
  const [fieldData, setFieldData] = useState(initialParamValues);

  const [toDoId, setToDoId] = useState(0);

  //this defines the api object
  const [data, setData] = useState([]);

  //captures the input value
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setToDoId(value);
  };

  const click = async () => {
    const apiWithParams = `${apiUrl}?id=${toDoId}`;

    const response = await fetch(apiWithParams);

    const newData = await response.json();
    console.log(newData);

    if (newData.length) {
      setData(newData[0]);
    }
  };

  return (
    <div className="api--div">
      <p>This is a list of acceptable fields to query</p>
      <ul>
        <li>userId (1-10)</li>
        <li>id (1-200)</li>
        <li>title (Lorem Ipsum)</li>
        <li>completed (boolean)</li>
      </ul>
      <div className="api--field--div">
        <input
          className="api--field"
          placeholder="type data object field here"
          value={toDoId}
          onChange={handleInputChange}
          name="field"
          label="Field"
        />
        <input
          className="api--field"
          placeholder="type here for field value"
          value={fieldData.fieldValue}
          onChange={handleInputChange}
          name="fieldValue"
          label="Field Value"
        />
      </div>
      <button type="submit" onClick={click} className="api--button">
        Click Me
      </button>
      <p>
        The queried field was <b>{fieldData.field}</b> with a value of
        <b>{fieldData.fieldValue}</b>. That field has the following object{" "}
        {data && (
          <ul>
            <li>Id: {data.id}</li>
            <li>UserId: {data.userId}</li>
            <li>Title: {data.title}</li>
            <li>Completed: {data.completed ? "yes" : "no"}</li>
          </ul>
        )}
      </p>
    </div>
  );
}
