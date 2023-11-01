import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loaderImage from "../assets/images/fshloader.gif";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  
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

export default Loader;
