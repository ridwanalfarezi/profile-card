import React from "react";

const Edit = () => {
  return (
    <div className="edit-container">
      <form action="" className="d-block py-5">
        <h1 className="edit-title mb-5">EDIT CARD PROFILE</h1>
        <div className="mb-4">
          <label htmlFor="fname" className="d-flex align-items-center gap-2">
            <i className="bi bi-person-circle"></i>
            <span>FULL NAME</span> 
          </label>
          <input type="text" className="form-control" id="fname" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="d-flex align-items-center gap-2">
            <i className="bi bi-building"></i> 
            <span>CITY</span>
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="d-flex align-items-center gap-2">
            <i className="bi bi-flag"></i> 
            <span>COUNTRY</span> 
          </label>
          <input type="text" className="form-control" id="country" />
        </div>
        <div className="mb-4">
          <label htmlFor="job" className="d-flex align-items-center gap-2">
            <i className="bi bi-person-workspace"></i> 
            <span>JOB</span>
          </label>
          <input type="text" className="form-control" id="job" />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="d-flex align-items-center gap-2 mb-2">
            <i className="bi bi-person-check-fill"></i>
            <span>ABOUT</span>
          </label>
          <textarea className="form-control" id="about" rows="8"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="instagram" className="d-flex align-items-center gap-2">
            <i className="bi bi-instagram"></i>
            <span>INSTAGRAM</span> 
          </label>
          <input type="url" className="form-control" id="instagram" />
        </div>
        <div className="mb-4">
          <label htmlFor="facebook" className="d-flex align-items-center gap-2">
            <i className="bi bi-facebook"></i>
            <span>FACEBOOK</span> 
          </label>
          <input
            type="url"
            className="form-control"
            id="facebook"
            name="facebook"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="twitter" className="d-flex align-items-center gap-2">
            <i className="bi bi-twitter"></i>
            <span>TWITTER</span> 
          </label>
          <input type="url" className="form-control" id="twitter" name="twitter" />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-lg btn-discard fw-bold rounded-pill px-4"
          >
            Discard
          </button>
          <button
            type="submit"
            className="btn btn-lg btn-save fw-bold rounded-pill px-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
