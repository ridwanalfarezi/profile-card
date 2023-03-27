import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route } from "react-router-dom";
import Card from "./Card";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Edit from "./Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;