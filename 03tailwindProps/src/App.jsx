import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <h1 className="bg-green-400 p-4 rounded-full text-black mb-10">
        {" "}
        Tailwind Test{" "}
      </h1>

      <Card username = "Ashlesha" btnText = "Click Me" imgSrc = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" />

      <Card username = "Smriti" btnText = "Visit Me" imgSrc = "https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      
    </>
  );
}

export default App;
