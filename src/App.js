import "./App.css";
import Menu from "./components/Menu/Menu";
import Tweetbox from "./components/Tweetbox/Tweetbox";

function App() {
  return (
    <div className="app">
      <div>
        <Menu />
      </div>
      <div>
        <Tweetbox />
      </div>
    </div>
  );
}

export default App;
