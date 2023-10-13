import React, { useEffect, useState } from "react";
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

  //this defines the api object
  const [data, setData] = useState([]);

  //captures the input value
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFieldData({
      ...fieldData,
      [name]: value,
    });
  };

  //puts the input value in the api query call
  const apiWithParams = `${apiUrl}?${fieldData.field}=${fieldData.fieldValue}`;

  // //this will fetch the api data
  const info = async () => {
    const response = await fetch(apiWithParams);

    setData(await response.json());
  };

  // this will store the api data
  useEffect(() => {
    info();
  }, []);

  const click = () => {
    return data;
  };

  const matchingData = data.find(
    (item) => item.id.toString() === fieldData.fieldValue
  );
  const desiredIdValue = matchingData ? matchingData.id : "No match found";
  const desiredUserIdValue = matchingData ? matchingData.userId : "No match found";
  const desiredTitle = matchingData ? matchingData.title : "No match found";
  const desiredCompletedStatus = matchingData
    ? matchingData.completed
    : "No match found";

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
          value={fieldData.field}
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
        {/* {data.map((item) => (
          <div key={item}>
            <ul>
              <li>Id: {item.id}</li> 
              <li>UserId: {item.userId}</li>
              <li>Title: {item.title}</li>
              <li>Completed: {item.completed}</li>
            </ul>
          </div>
        ))} */}
        <ul>
          <li>Id: {desiredIdValue}</li>
          <li>UserId: {desiredUserIdValue}</li>
          <li>Title: {desiredTitle}</li>
          <li>Completed: {desiredCompletedStatus}</li>
        </ul>
      </p>
    </div>
  );
}
