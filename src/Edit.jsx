import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Edit = () => {
  const [image, setImage] = useState(null);
  const [fullname, setFullname] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");
  const [about, setAbout] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api-profile-card.vercel.app/api/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data;
        setFullname(data.fullname);
        setImage(data.avatar);
        setCity(data.city);
        setCountry(data.country);
        setJob(data.job);
        setAbout(data.about);
        setInstagram(data.instagram);
        setFacebook(data.facebook);
        setTwitter(data.twitter);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    fetchUserData();
  }, []);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const avatar = await convertToBase64(file);

    if (avatar) {
      const image = {
        avatar
      };

      axios
        .put(`https://api-profile-card.vercel.app/api/${username}/edit`, image, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setImage(avatar);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      fullname,
      city,
      country,
      job,
      about,
      instagram,
      facebook,
      twitter,
    };

    axios
      .put(`https://api-profile-card.vercel.app/api/${username}/edit`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Updated Successfully!");
        setTimeout(() => navigate(`/`), 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDiscard = () => {
    setFullname("");
    setCity("");
    setCountry("");
    setJob("");
    setAbout("");
    setInstagram("");
    setFacebook("");
    setTwitter("");
    setImage(null);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    });
  };

  return (
    <div className="edit-container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <BeatLoader color="#19a7ce" />
        </div>
      ) : (
        <form action="" className="d-block py-5" onSubmit={handleSubmit}>
          <div className="edit-header d-flex align-items-center mb-5">
            <Link to="/" className="back">
              <i className="bi bi-arrow-left-circle fs-1"></i>
            </Link>
            <h1 className="edit-title mx-auto m-0">EDIT PROFILE CARD</h1>
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-person-circle"></i>
              <span>FULL NAME</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <div
              className="d-flex align-items-center gap-2 mb-3"
              style={{ color: "var(--primary)", fontSize: "1.4rem" }}
            >
              <i className="bi bi-person-bounding-box"></i>
              <span>AVATAR</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="avatar-container">
                <img src={image} alt="Avatar" className="avatar-image" />
                <div
                  className="avatar-overlay"
                  onClick={() => document.getElementById("previewImg").click()}
                >
                  <div>Change Avatar</div>
                </div>
              </div>
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
              Recommendation resolution 1 : 1
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="d-flex align-items-center gap-2">
              <i className="bi bi-building"></i>
              <span>CITY</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-flag"></i>
              <span>COUNTRY</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="job" className="d-flex align-items-center gap-2">
              <i className="bi bi-person-workspace"></i>
              <span>JOB</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="about"
              className="d-flex align-items-center gap-2 mb-2"
            >
              <i className="bi bi-person-check-fill"></i>
              <span>ABOUT</span>
            </label>
            <textarea
              className={
                about.length > 200
                  ? "form-control border-danger"
                  : "form-control"
              }
              id="about"
              rows="8"
              value={about}
              onChange={(event) => setAbout(event.target.value)}
              autoComplete="off"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="instagram"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-instagram"></i>
              <span>INSTAGRAM</span>
            </label>
            <input
              type="url"
              className="form-control"
              id="instagram"
              value={instagram}
              onChange={(event) => setInstagram(event.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="facebook"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-facebook"></i>
              <span>FACEBOOK</span>
            </label>
            <input
              type="url"
              className="form-control"
              id="facebook"
              name="facebook"
              value={facebook}
              onChange={(event) => setFacebook(event.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="twitter"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-twitter"></i>
              <span>TWITTER</span>
            </label>
            <input
              type="url"
              className="form-control"
              id="twitter"
              name="twitter"
              value={twitter}
              onChange={(event) => setTwitter(event.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              onClick={handleDiscard}
              className="btn btn-lg btn-discard fw-bold rounded-pill px-4"
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-lg btn-save fw-bold rounded-pill px-4"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Edit;
