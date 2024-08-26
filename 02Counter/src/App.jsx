import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter= 15;

  // const addValue = function() {
  //     counter = counter + 1;
  //     setCounter(counter);
  // }

  // const removeValue = function() {
  //     counter = counter - 1;
  //     setCounter(counter);
  // }

// increasing value till 20 and decreasing but not below 0
const addValue = function() {
const msg = document.getElementById("message");
  if (counter < 20) {
      counter= counter + 1;
      setCounter(counter);
    }
  else {
    msg.innerHTML = "<p>Value is already at the maximum (20).</p>";
  }
}


const removeValue = function() {
const msg = document.getElementById("message");
  if(counter > 0) {
    counter= counter - 1;
    setCounter(counter);
  }
  else {
    msg.innerHTML = "<p>Value is already at the minimum (0).</p>";
  }
}

  return (
    <>
    <div id="message">
      <h1>Hello React</h1>
      <h2>Counter Values:{counter}</h2>
      <p>So the Counter Value is: {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
