import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route } from "react-router-dom";
import Card from "./Card";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;