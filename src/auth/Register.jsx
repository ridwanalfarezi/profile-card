import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { registerValidation } from "./validate";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      city: "",
      country: "",
      job: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://api-profile-card.vercel.app/api/register",
          {
            fullname: values.fullname,
            username: values.username,
            city: values.city,
            country: values.country,
            job: values.job,
            password: values.password,
            cpassword: values.cpassword,
          }
        );
        console.log(response.data);
        toast.success("Register Successfully!");
        setTimeout(() => navigate("/login"), 500);
      } catch (error) {
        console.error(error);
        toast.error("Register Failed!");
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
          <i className="bi bi-person-circle fs-3"></i>
          <input
            {...formik.getFieldProps("fullname")}
            type="text"
            placeholder="FULL NAME"
            className="input"
            name="fullname"
            autoFocus
            autoComplete="off"
          />
        </div>
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
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-building fs-3"></i>
          <input
            {...formik.getFieldProps("city")}
            type="text"
            placeholder="CITY"
            className="input"
            name="city"
            autoComplete="off"
          />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-flag fs-3"></i>
          <input
            {...formik.getFieldProps("country")}
            type="text"
            placeholder="COUNTRY"
            className="input"
            name="country"
            autoComplete="off"
          />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-person-workspace fs-3"></i>
          <input
            {...formik.getFieldProps("job")}
            type="text"
            placeholder="JOB"
            className="input"
            name="job"
            autoComplete="off"
          />
        </div>
        <div className="mb-4 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-key fs-3"></i>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="PASSWORD"
            className="input"
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="mb-5 d-flex gap-2 align-items-center input-content">
          <i className="bi bi-key fs-3"></i>
          <input
            {...formik.getFieldProps("cpassword")}
            type="password"
            placeholder="CONFIRM PASSWORD"
            className="input"
            name="cpassword"
            autoComplete="off"
          />
        </div>
        {isLoading ? (
          <button
            type="submit"
            className="btn btn-lg button fw-bold d-block mx-auto rounded-pill"
          >
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-lg button fw-bold d-block mx-auto rounded-pill"
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
