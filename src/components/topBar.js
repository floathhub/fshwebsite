import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import toggler from "../assets/icons/toggler.png";
import styles from "../pages/css/home.module.css";
import { useNavigate } from "react-router-dom";
import { guides } from "../constants/constants";

const TopBar = ({ toggleMenu }) => {
  const [toggleSide, setToggleSide] = useState(false);

  const currentUrl = window.location.pathname
  
  const navigate = useNavigate();
  return (
    <div
      className="navbar sticky-top bg-light shadow-sm p-3 px-4"
      style={{ zIndex: 50 }}
    >
      <img src={logo} height="50em" alt="logo" onClick={()=>navigate('/home')} style={{cursor:'pointer'}}/>

      <ul className={`${styles.desktopNav} text-light gap-4 text-dark mx-4`} style={{ cursor: "pointer", fontFamily:'textFont'}}>
        {guides.map((guide,index) => (
          <p 
          key={index}
          className="m-0 p-0"
          style={{color:currentUrl == guide.path && '#2AB7C8'}}
          onClick={()=>navigate(guide.path)}>{guide?.title}</p>
        ))}
      </ul>
      <img
        onClick={() => toggleMenu()}
        className="toggleBurger"
        src={toggler}
        height="15em"
        alt="toggle"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
export default TopBar;
