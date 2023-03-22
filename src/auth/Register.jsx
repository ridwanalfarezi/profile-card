import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
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
          <i class="bi bi-person-circle fs-3"></i>
          <input
            type="text"
            placeholder="FULL NAME"
            className="input"
            required
            autoFocus
          />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-person fs-3"></i>
          <input
            type="text"
            placeholder="USERNAME"
            className="input"
            required
          />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-building fs-3"></i>
          <input type="text" placeholder="CITY" className="input" required />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-flag fs-3"></i>
          <input type="text" placeholder="COUNTRY" className="input" required />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-person-workspace fs-3"></i>
          <input type="text" placeholder="JOB" className="input" required />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-key fs-3"></i>
          <input
            type="password"
            placeholder="PASSWORD"
            className="input"
            required
          />
        </div>
        <div className="mb-5 d-flex gap-2 align-items-center input-content">
          <i class="bi bi-key fs-3"></i>
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            className="input"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg button fw-bold d-block mx-auto rounded-pill"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
