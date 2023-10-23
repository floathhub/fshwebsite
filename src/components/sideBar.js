import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import styles from "../pages/css/home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { guides } from "../constants/constants";

const SideBar = ({ show, off }) => {
  const currentUrl = window.location.pathname;

  const navigate = useNavigate();
  return (
    <div
      className={`${
        show ? styles.sideBar : styles.offSideBar
      } flex-column text-light m-0 w-100 shadow-sm`}
    >
      <h1 className="w-100  p-3 px-4 text-end">
        <i
          className="bi bi-x-circle"
          onClick={off}
          style={{ cursor: "pointer", fontSize: "0.7em" }}
        ></i>
      </h1>
      <ul
        className="w-100 d-flex flex-column p-0 align-items-center mt-5"
        style={{ listStyle: "none", fontFamily: "textFont" }}
      >
        {" "}
        {guides.map((guide,index) => (
          <li
          key={index}
            onClick={() => {
              off();
              navigate(guide.path);
            }}
            className="d-flex w-100 text-center justify-content-center align-items-center"
            style={{ minHeight: "3em", cursor: "pointer" }}
          >
            <a
              style={{
                textDecoration: "none",
                color: currentUrl == guide.path && "#2AB7C8",
              }}
            >
              {guide.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center mt-4">
        <Button style={{ maxWidth: "10em" }}>
          <Link
            to="https://wa.me/message/NSIQY7RHQ2W4C1"
            className="text-secondary"
            style={{ textDecoration: "none", fontFamily: "titleFont" }}
          >
            Contact us
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default SideBar;
