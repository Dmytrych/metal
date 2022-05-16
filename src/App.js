import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import { useContext, useState } from "react";
import Calculator from "./Pages/Calculator";

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Calculator/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
