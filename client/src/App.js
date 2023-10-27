import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Tweetbox from "./components/Tweetbox/Tweetbox";
import ApiData from "./components/ApiData/ApiData";
import GetData from "./components/CustomApi/GetData";
import PostData from "./components/CustomApi/PostData";

function App() {

  return (
    <div className="app">
      <div>
        <Menu />
      </div>
      <div>
        <Tweetbox />
      </div>
      <div>
        <ApiData/>
      </div>
      <div>
        <GetData />
      </div>
    </div>
  );
}

export default App;
