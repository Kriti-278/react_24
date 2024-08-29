import { useState } from "react";
import "./app.css";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive")

  return (

   <div className="bgcolor-change" 
   style={{backgroundColor: color}}>
    
    <div className="change-type">
      <div className="change-buttons">
        <button style={{backgroundColor:"Brown"}}
        onClick={function(){setColor("brown")}}>Brown</button>
      </div>
      <div className="change-buttons">
        <button style={{backgroundColor:"Red"}}
        onClick={function(){setColor("red")}}>Red</button>
      </div>
      <div className="change-buttons">
        <button style={{backgroundColor:"Green"}}
        onClick={function(){setColor("green")}}>Green</button>
      </div>
      <div className="change-buttons">
        <button style={{backgroundColor:"Blue"}}
        onClick={function(){setColor("blue")}}>Blue</button>
      </div>
      <div className="change-buttons">
        <button style={{backgroundColor:"Orange"}}
        onClick={function(){setColor("orange")}}>Orange</button>
      </div>
    </div>
   </div>
  )

}

export default App
