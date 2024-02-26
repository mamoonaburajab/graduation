import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Mother/Home/Home";
import Note from "./pages/Mother/Note/Note";
import ChildCard from "./component/childCard/childCard";
import MotherChildCard from "./component/MotherChildCard/MotherChildCard";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mother/home" element={<Home />} />
          <Route path="/mother/childCard" element={<ChildCard />} />
          <Route path="/mother/MotherChildCard" element={<MotherChildCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
