import React, { useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectTime, setSelectTime] = useState(4000);

  return (
    <Routes>
      <Route
        index
        element={
          <Home
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
          />
        }
      />
      <Route
        path="practice"
        element={
          <Practice selectedOptions={selectedOptions} selectTime={selectTime} />
        }
      />
    </Routes>
  );
}

export default App;
