import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import toggler from "../assets/icons/toggler.png";
import styles from "../pages/css/home.module.css";
import { useNavigate } from "react-router-dom";

const TopBar = ({ toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <div
      className="navbar sticky-top bg-light shadow-sm p-3 px-4"
      style={{ zIndex: 50 }}
    >
      <img src={logo} height="50em" alt="logo" />
      <img
        onClick={() => toggleMenu()}
        className="toggleBurger"
        src={toggler}
        height="15em"
        alt="toggle"
        style={{cursor:'pointer'}}
      />
    </div>
  );
};
export default TopBar;
