import React from "react";

const Edit = () => {
  return (
    <div className="edit-container">
      <form action="" className="d-block py-5">
        <h1 className="edit-title mb-5">EDIT CARD PROFILE</h1>
        <div class="mb-4">
          <label for="fname">FULL NAME</label>
          <input type="text" class="form-control" id="fname" />
        </div>
        <div class="mb-4">
          <label for="city">CITY</label>
          <input type="text" class="form-control" id="city" />
        </div>
        <div class="mb-4">
          <label for="country">COUNTRY</label>
          <input type="text" class="form-control" id="country" />
        </div>
        <div class="mb-4">
          <label for="job">JOB</label>
          <input type="text" class="form-control" id="job" />
        </div>
        <div class="mb-4">
          <label for="about" class="form-label">
            ABOUT
          </label>
          <textarea class="form-control" id="about" rows="8"></textarea>
        </div>
        <div class="mb-4">
          <label for="instagram">INSTAGRAM</label>
          <input type="url" class="form-control" id="instagram" />
        </div>
        <div class="mb-4">
          <label for="facebook">FACEBOOK</label>
          <input
            type="url"
            class="form-control"
            id="facebook"
            name="facebook"
          />
        </div>
        <div class="mb-5">
          <label for="twitter">TWITTER</label>
          <input type="url" class="form-control" id="twitter" name="twitter" />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-lg btn-discard fw-bold rounded-pill px-4">
            Discard
          </button>
          <button type="submit" className="btn btn-lg btn-save fw-bold rounded-pill px-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
