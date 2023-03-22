import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <form action="" className="d-block">
        <nav className="mb-5 d-flex justify-content-between">
          <NavLink to="/login" className="nav-link">
            SIGN IN
          </NavLink>
          <NavLink to="/register" className="nav-link">
            SIGN UP
          </NavLink>
        </nav>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-person fs-3"></i>
          <input
            type="text"
            placeholder="USERNAME"
            className="input"
            required
            autoFocus
          />
        </div>
        <div className="mb-5 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-key fs-3"></i>
          <input
            type="password"
            placeholder="PASSWORD"
            className="input"
            required
          />
        </div>
        <button className="btn btn-lg button fw-bold d-block mx-auto rounded-pill">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
