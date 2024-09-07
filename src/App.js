import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
