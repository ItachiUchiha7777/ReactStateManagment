// import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function Namelist(){
    let [list,setList]=useState(["Rohit","Mohit","Shankara"])
    const [name,setName]=useState("");
    const onAddName=()=>{

        setList([...list,name])
        setName("")
    }
    return (
        <div>
            <ul>
                {list.map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            <input type="text" value={name}
            onChange={(e)=>
                setName(e.target.value)}/>
        <button onClick={onAddName}>Add Name</button>
        </div>

    )
}



function Counter(){
    const [count, setCount] = useState(0)
    function addOne(){
        setCount(count+1)
        console.log(count)
    }
    return (
        <div>
            <button onClick={addOne}>Press me {count}</button>

        </div>
    );
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Namelist/>
            <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>


      </header>
    </div>
  );
}

export default App;
