import React from "react";
import "./Tweetbox.css";
import TextBox from "../TextBox/TextBox";
import { useState } from "react";
import { TweetView } from "./TweetView";

function Tweetbox() {
  const [tweets, setTweets] = useState([]);
  
  const onClick = (tweet) => {
    //save the new tweet into an array of tweets
    setTweets(tweets.concat(tweet))
  }

  //now bind the textbox to the onclick
  return (
    <div>
      <div>
      {tweets.map((tweet, index) => (
        <TweetView tweet={tweet} key={index} />
      ))}
        <TextBox onClick={onClick}/>
      </div>
    </div>
  );
}

export default Tweetbox;
