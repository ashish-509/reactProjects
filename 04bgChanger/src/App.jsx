import './App.css'
import './index.css'
import { useState } from "react"

function App() {
  const [color, setColor] = useState("cyan")

  return (

    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} // sets the respective background colors.
            // Caeful!! double curly braces in the above line.
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">

        <div className="flex flex-wrap justify-center  shadow-lg bg-white px-3 py-2 rounded-2xl">

          <button 
            onClick={() => setColor("red")} 
            className="outline-none px-4 py-1 m-3 rounded-xl text-white shadow-lg" 
            style = {{backgroundColor : "red"}} // This is for background color of the button.
          >Red</button>

          <button 
            onClick={() => setColor("black")} 
            className="outline-none px-4 py-1 m-3 rounded-xl text-white shadow-lg" 
            style = {{backgroundColor : "black"}}  // This is for background color of the button.
          >Black</button>

          <button 
            onClick={() => setColor("blue")} 
            className="outline-none px-4 py-1 m-3 rounded-xl text-white shadow-lg" 
            style = {{backgroundColor : "blue"}}  // This is for background color of the button.
          >Blue</button>

          <button 
            onClick={() => setColor("green")} 
            className="outline-none px-4 py-1 m-3 rounded-xl text-white shadow-lg" 
            style = {{backgroundColor : "green"}}  // This is for background color of the button.
          >Green</button>


          <button 
            onClick={() => setColor("orange")} 
            className="outline-none px-4 py-1 m-3 rounded-xl text-white shadow-lg" 
            style = {{backgroundColor : "orange"}}  // This is for background color of the button.
          >Orange</button>

        </div>

      </div>

    </div>

  )
}

export default App