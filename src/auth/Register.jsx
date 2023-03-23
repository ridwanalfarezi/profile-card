import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { registerValidation } from "./validate";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
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
    onSubmit: async () => {
      toast.success("Register Successfully!");
    },
  });

  // useEffect(() => {
  //   if (formik.errors) {
  //     Object.values(formik.errors).forEach((error) => {
  //       toast.error(error);
  //     });
  //   } else {
  //     toast.success("Register Successfully!");
  //   }
  // }, [formik.errors]);
  

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
            {...formik.getFieldProps("fname")}
            type="text"
            placeholder="FULL NAME"
            className="input"
            name="fname"
            autoFocus
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
