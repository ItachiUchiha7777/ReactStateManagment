// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  function addOne(){
    setCount(count+1)
    console.log(count)
  }
  return (
    <div className="App">
      <header className="App-header">
  <counter/>
        <p> The value of count is {count}</p>
      </header>
    </div>
  );
}

export default App;
