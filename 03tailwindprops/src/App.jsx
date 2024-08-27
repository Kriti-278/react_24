import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   name: "Kriti",
  //   age: 21,
  // }

  // let myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-purple-400 text-white p-4 rounded-xl mb-4'>
        Tailwind block
      </h1>

      {/* <Card channel="React_Learn" someobj={myObj} newArr={myArr} />  */}

      <div className='flex gap-4 py-8'>
          <Card username= "Kriti" btntext="Click Me" />

          <Card username= "Priya" /> 
          {/* if someone forgot to pass the btntext in card component than in card.jsx
          it's value is given with separation of ||  */}

          <Card username= "Neha" btntext="Visit Me" />
      </div>
    </>
  )
}

export default App