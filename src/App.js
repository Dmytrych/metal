import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import { useContext, useState } from "react";
import Calculator from "./pages/Calculator";

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/calc" element={<Calculator/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
