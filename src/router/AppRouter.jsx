import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/courses" element={<PrivateRouter />}>
            <Route path="/courses" element={<CourseCard />} />
          </Route>
          <Route path="/contact" element={<PrivateRouter/>}>
            <Route path="/contact" element={<ContactForm />} />
          </Route>

          <Route path="/paths" element={<Paths />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
