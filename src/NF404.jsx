import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container-fluid row align-items-center py-5 m-0"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center text-white">
        <div className="col-md-12 text-center">
          <div className="display-1 mb-4">
            <i className="bi bi-emoji-frown"></i>
          </div>
          <h1 className="display-1 mb-4 fw-bold">404</h1>
          <p className="lead">The page you requested could not be found.</p>
          <Link
            to="/"
            className="btn btn-lg button fw-bold d-block w-25 mx-auto rounded-pill mt-4"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
