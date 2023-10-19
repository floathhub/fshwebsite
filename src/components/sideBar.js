import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import styles from "../pages/css/home.module.css";
import { useNavigate } from "react-router-dom";

const SideBar = ({ show, off }) => {
  const guides = [
    {
      title: "Home",
      icon: "",
      path: "home",
    },
    {
      title: "Services",
      icon: "",
      path: "services",
    },
    {
      title: "Products",
      icon: "",
      path: "products",
    },
    {
      title: "About",
      icon: "",
      path: "about",
    },
    {
      title: "Career In Tech",
      icon: "",
      path: "career",
    },
  ];
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
        {guides.map((guide) => (
          <li
          onClick={()=>{
            off()
            }}
            className="d-flex w-100 text-center justify-content-center align-items-center"
            style={{ minHeight: "3em" }}
          >
            <a
              href={guide.path}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              {guide.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="secondary"
          style={{ maxWidth: "10em", fontFamily: "textFont" }}
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};
export default SideBar;
