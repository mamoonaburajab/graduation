import { lazy } from "react";
import ChildCard from "../component/childCard/childCard";
import NotFound from "../component/NotFound/NotFound";

const Login = lazy(() => import("../pages/Login/Login"));
const Home = lazy(() => import("../pages/Mother/Home/Home"));
const Note = lazy(() => import("../pages/Mother/Note/Note"));
const Vac = lazy(() => import("../pages/Mother/Vac/Vac"));
const HomeD = lazy(() => import("../pages/Doctor/HomeD/HomeD"));
const Child = lazy(() => import("../pages/Doctor/child/Child"));
const AppointmentPage = lazy(() =>
  import("../pages/Doctor/AppointmentPage/AppointmentPage")
);
const ChildMeasurDoc = lazy(() =>
  import("../pages/Doctor/ChildMeasurDoc/ChildMeasurDoc")
);
const Home_manager = lazy(() =>
  import("../pages/administrative_Manager/Home/Home")
);
const MotherChildCard = lazy(() =>
  import(
    "/home/mamoon/graduation folder/graduation/src/component/MotherChildCard/MotherChildCard.jsx"
  )
);
const BookAppointment = lazy(() =>
  import("../component/BookAppointment/BookAppointment")
);
const ViewAppointments = lazy(() =>
  import("../component/ViewAppointments/ViewAppointments")
);
const Guast = lazy(() => import("../pages/guast/Guast"));
const routes = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/mother/home", element: <Home /> },
  { path: "/mother/note", element: <Note /> },
  { path: "/mother/MotherChildCard/Vac", element: <Vac /> },
  { path: "/doctor/home", element: <HomeD /> },
  { path: "/doctor/child", element: <Child /> },
  { path: "/doctor/appointments", element: <AppointmentPage /> },
  { path: "/doctor/measurement", element: <ChildMeasurDoc /> },
  { path: "/administrative_manager/home", element: <Home_manager /> },
  { path: "/mother/MotherChildCard", element: <MotherChildCard /> },
  { path: "/mother/MotherChildCard/childCard", element: <ChildCard /> },
  { path: "/mother/Appointment", element: <BookAppointment /> },
  { path: "/mother/ViewApp", element: <ViewAppointments /> },
  { path: "*", element: <NotFound /> },
  { path: "/guast", element: <Guast /> },
];

export default routes;
