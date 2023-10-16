import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0){
      setCount ((count) => count - 1);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Chiya ra React</h1>
      <div className="buttons">
        <button onClick={() => setCount((count) => count + 1)}>Add value</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <br></br>
        <br></br>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
      </div>
      <p className="owner">
        This app was developed by - <b><i>  Ashish Kandel  </i></b>
      </p>
    </>
  )
}

export default App
