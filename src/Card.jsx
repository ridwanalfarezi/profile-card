import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://profile-card-api.vercel.app/api/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Kirim token sebagai header Authorization
            },
          }
        );
        const data = response.data;
        console.log(data);
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
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
    description,
    facebook,
    instagram,
    twitter,
  } = userData;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container rounded-4">
          <div className="card-bg position-relative">
            <Link to="/edit" className="edit position-absolute">
              <i className="bi bi-pencil-square fs-5"></i>
            </Link>
            <Link to="/logout" className="logout position-absolute">
              <i className="bi bi-box-arrow-left fs-5"></i>
            </Link>
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
            <p className="desc">{description}</p>
            <div className="d-flex justify-content-around my-5 fs-2 socials">
              <a href={instagram} target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={facebook} target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={twitter} target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
