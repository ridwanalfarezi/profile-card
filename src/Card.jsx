import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Card = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
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
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    fetchUserData();
  }, []);

  const {
    avatar,
    fullname,
    city,
    country,
    job,
    about,
    facebook,
    instagram,
    twitter,
  } = userData;

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
    setTimeout(() => {
      toast.success("You're Logged Out!");
    }, 500);
  };

  return (
    <>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <BeatLoader color="#19a7ce" />
        </div>
      ) : (
        <div className="card-container rounded-4">
          <div className="card-bg position-relative">
            <Link to="/edit" className="edit position-absolute">
              <i className="bi bi-pencil-square fs-5"></i>
            </Link>
            <button onClick={logout} className="logout position-absolute">
              <i className="bi bi-box-arrow-left fs-5"></i>
            </button>
            <img
              src={avatar}
              alt={fullname}
              className="rounded-circle d-block position-absolute"
            />
          </div>
          <div className="content">
            <h2 className="content-name">{fullname}</h2>
            <h6 className="Address">
              {city}, {country}
            </h6>
            <h3 className="content-job">{job}</h3>
            <p className="desc">{about}</p>
            <div className="d-flex justify-content-around my-5 fs-2 socials">
              {instagram ? (
                <a href={instagram} target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
              ) : null}
              {facebook ? (
                <a href={facebook} target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
              ) : null}
              {twitter ? (
                <a href={twitter} target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
