import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { loginValidation } from "./validate";

const Login = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://profile-card-api.vercel.app/api/login",
          {
            username: values.username,
            password: values.password,
          }
        );
        console.log(response.data);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Simpan token pada localStorage
        localStorage.setItem("username", response.data.username); // Simpan username pada localStorage
        toast.success("Login Successfully!");
        setTimeout(() => navigate(`/`), 1500);
      } catch (error) {
        console.error(error);
        toast.error("Login Failed!");
      } finally {
        setIsLoading(false);
      }
    },
  });

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
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="USERNAME"
            className="input"
            name="username"
            autoComplete="off"
          />
        </div>
        <div className="mb-5 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-key fs-3"></i>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="PASSWORD"
            className="input"
            autoComplete="off"
          />
        </div>
        {isLoading ? (
          <button
            type="submit"
            className="btn btn-lg button fw-bold d-block mx-auto rounded-pill"
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-lg button fw-bold d-block mx-auto rounded-pill"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
