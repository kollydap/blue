import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Appointment from "./components/Appointment";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SingleDoctor from "./components/SingleDoctor";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import LogOut from "./components/LogOut";
import PatientDash from "./components/PatientDash";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/doctor/:id/" element={<SingleDoctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient/*" element={<PatientDash />} />
        {/* <Route path="/doctor/:id/appointment" element={<Appointment />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
