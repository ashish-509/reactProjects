import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 text-gray-500 bg-green-500">React Router</div>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
