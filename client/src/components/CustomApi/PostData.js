import React, { useState, useEffect } from "react";

export default function PostData() {
  const [data, setData] = useState("");

  const postData = async () => {
    const dataToPost = { hello: "World" };
    const response = await fetch(
      "http://localhost:9000/postTestApi",
      dataToPost
    );
    console.log(dataToPost);
    setData(response);
  };

  const onClick = () => {
    postData();
  };

  return (
    <div>
      <input type="text" placeholder="post request" value={data} />
      <button type="submit" onClick={onClick}>Click here for a Post request</button>
      <p> This is the Post Data.</p>
    </div>
  );
}
