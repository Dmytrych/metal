import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import { useContext, useState } from "react";
import CalculatorPage from "./Pages/CalculatorPage";

function App() {
  const [ menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/calc" element={<CalculatorPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
