import React from "react";
import { useState } from "react";
import "./Tweetbox.css";

/* 
show a list of tweets above the text box
show text of tweet and timestamp of the tweet, keep state
*/

function Tweetbox() {
  const [data, setData] = useState();

  const click = () => {
    setTweets(tweets.concat(data));
    setData();
    date(getDate);
  };

  const [tweets, setTweets] = useState([]);

  const currentDate = new Date().toLocaleString();

  const [getDate, setCurrentDate] = useState(currentDate);

  const date = () => {
    setCurrentDate(currentDate)
  };

  const comment = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      {tweets.map((tweet, index) => (
        <p key={index}>{currentDate} <br /> {tweet}</p>
      ))}
      <textarea
        className="text-box"
        type="text"
        placeholder="Type here"
        onChange={comment}
        value={data}
      />
      <button className="button" onClick={click}>
        Click here
      </button>
    </div>
  );
}

export default Tweetbox;
