import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loaderImage from "../assets/images/fshloader.gif";

const LoaderPage = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  const handleLoader = () => {
    const countDown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countDown);
        navigate("/home");
      }
    }, 1000);
  };
  useEffect(() => {
    handleLoader();
  });
  return (
    <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
      <img
        src={loaderImage}
        height="150em"
        alt="toggle"
        style={{ zIndex: 150 }}
      />
    </div>
  );
};

export default LoaderPage;
