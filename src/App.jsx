import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Mother/Home/Home";
import Note from "./pages/Mother/Note/Note";
import ChildCard from "./component/childCard/childCard";
import MotherChildCard from "./component/MotherChildCard/MotherChildCard";
import BookAppointment from "./component/BookAppointment/BookAppointment";
import ViewAppointments from "./component/ViewAppointments/ViewAppointments";
import Vac from "./pages/Mother/Vac/Vac";
import HomeD from "./pages/Doctor/HomeD/HomeD";
import Child from "./pages/Doctor/child/Child";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mother/home" element={<Home />} />
          <Route path="/mother/MotherChildCard/childCard" element={<ChildCard />} />
          <Route path="/mother/MotherChildCard" element={<MotherChildCard />} />
          <Route path="/mother/Appointment" element={<BookAppointment />} />
          <Route path="/mother/note" element={<Note />} />
          <Route path="/mother/ViewApp" element={<ViewAppointments/>}/>
          <Route path="/mother/MotherChildCard/Vac" element={<Vac/>}/>
          <Route path="/Doctor/Home" element={<HomeD/>}/>
          <Route path="/Doctor/child" element={<Child/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
