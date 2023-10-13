import "./App.css";
import Menu from "./components/Menu/Menu";
import Tweetbox from "./components/Tweetbox/Tweetbox";
import ApiData from "./components/ApiData/ApiData";

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
        <ApiData />
      </div>
    </div>
  );
}

export default App;
