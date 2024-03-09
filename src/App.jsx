import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  // const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive =(num)=>{
    alert (num +5)
  }
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h2>React Core Concept part-2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked 2</button>
      <button onClick={()=> alert('Third button Clicked')}>Third Button</button>
      {/* {addToFive(3)} likhle JS mone kore function ke call kora hoise tai function e params dite chaile arrow function er vitore lekhte hoy.karon tokhon ei function ke alada 1ta function e wrap kore felsi */}
      <button onClick={()=> addToFive(3)}>button 4</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
    </>
  )
}

export default App
