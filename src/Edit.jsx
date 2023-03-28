import React, { useState } from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="edit-container">
      <form action="" className="d-block py-5">
        <div className="edit-header d-flex align-items-center mb-5">
          <Link to="/:username" className="back">
            <i class="bi bi-arrow-left-circle fs-1"></i>
          </Link>
          <h1 className="edit-title mx-auto m-0">EDIT PROFILE CARD</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="fname" className="d-flex align-items-center gap-2">
            <i className="bi bi-person-circle"></i>
            <span>FULL NAME</span>
          </label>
          <input type="text" className="form-control" id="fname" />
        </div>
        <div className="mb-4">
          <div
            className="d-flex align-items-center gap-2 mb-3"
            style={{ color: "var(--primary)", fontSize: "1.4rem" }}
          >
            <i class="bi bi-person-bounding-box"></i>
            <span>AVATAR</span>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <label htmlFor="previewImg">
              <span className="btn btn-lg button d-block w-100">
                Upload Image
              </span>
            </label>
            {image && <img src={image} alt="Avatar" className="img-preview" />}
            <input
              type="file"
              accept="img/*"
              className="form-control"
              id="previewImg"
              onChange={handleImageChange}
              hidden
            />
          </div>
          <p className="text-center mt-3" style={{ color: "var(--primary)" }}>
            Recomendation resolution 1 : 1
          </p>
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
          <label
            htmlFor="about"
            className="d-flex align-items-center gap-2 mb-2"
          >
            <i className="bi bi-person-check-fill"></i>
            <span>ABOUT</span>
          </label>
          <textarea className="form-control" id="about" rows="8"></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="instagram"
            className="d-flex align-items-center gap-2"
          >
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
          <input
            type="url"
            className="form-control"
            id="twitter"
            name="twitter"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            to="/"
            type="reset"
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
