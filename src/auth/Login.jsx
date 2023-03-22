import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { loginValidation } from "./validate";

const Login = () => {
  const formik =  useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    }
  })


  return (
    <div className="container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form action="" className="d-block" onSubmit={formik.handleSubmit}>
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
            {...formik.getFieldProps('username')}
            type="text"
            placeholder="USERNAME"
            className="input"
            name="username"
            />
        </div>
        <div className="mb-5 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-key fs-3"></i>
          <input
            {...formik.getFieldProps('password')}
            type="password"
            placeholder="PASSWORD"
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-lg button fw-bold d-block mx-auto rounded-pill">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
