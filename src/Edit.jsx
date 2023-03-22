import React from "react";

const Edit = () => {
  return (
    <div className="edit-container">
      <form action="" className="d-block py-5">
        <h1 className="edit-title mb-5">EDIT CARD PROFILE</h1>
        <div class="mb-4">
          <label for="fname" className="d-flex align-items-center gap-2">
            <i className="bi bi-person-circle"></i>
            <span>FULL NAME</span> 
          </label>
          <input type="text" class="form-control" id="fname" />
        </div>
        <div class="mb-4">
          <label for="city" className="d-flex align-items-center gap-2">
            <i className="bi bi-building"></i> 
            <span>CITY</span>
          </label>
          <input type="text" class="form-control" id="city" />
        </div>
        <div class="mb-4">
          <label for="country" className="d-flex align-items-center gap-2">
            <i className="bi bi-flag"></i> 
            <span>COUNTRY</span> 
          </label>
          <input type="text" class="form-control" id="country" />
        </div>
        <div class="mb-4">
          <label for="job" className="d-flex align-items-center gap-2">
            <i className="bi bi-person-workspace"></i> 
            <span>JOB</span>
          </label>
          <input type="text" class="form-control" id="job" />
        </div>
        <div class="mb-4">
          <label for="about" className="d-flex align-items-center gap-2 mb-2">
            <i class="bi bi-person-check-fill"></i>
            <span>ABOUT</span>
          </label>
          <textarea class="form-control" id="about" rows="8"></textarea>
        </div>
        <div class="mb-4">
          <label for="instagram" className="d-flex align-items-center gap-2">
            <i className="bi bi-instagram"></i>
            <span>INSTAGRAM</span> 
          </label>
          <input type="url" class="form-control" id="instagram" />
        </div>
        <div class="mb-4">
          <label for="facebook" className="d-flex align-items-center gap-2">
            <i className="bi bi-facebook"></i>
            <span>FACEBOOK</span> 
          </label>
          <input
            type="url"
            class="form-control"
            id="facebook"
            name="facebook"
          />
        </div>
        <div class="mb-5">
          <label for="twitter" className="d-flex align-items-center gap-2">
            <i className="bi bi-twitter"></i>
            <span>TWITTER</span> 
          </label>
          <input type="url" class="form-control" id="twitter" name="twitter" />
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
