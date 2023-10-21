import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Modal,
  Col,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import SideBar from "../components/sideBar";

import styles from "./css/home.module.css";

import fshErrorImg from "../assets/images/fsherrorPage.jpg";
import constctnImg from "../assets/images/constructionPage.png";

// import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/home.css";
import TopBar from "../components/topBar";

export default function ConstructionPage() {
  const navigate = useNavigate();
  const [toggleSide, setToggleSide] = useState(false);

  const [nav, setNav] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);
  const [quoteSucModal, setQuoteSucModal] = useState(false);
  const loggedInUser = useSelector((state) => state.auth.userInfo);
  const [showLoader, setShowLoader] = useState(true);
  const [stopLoader, setStopLoader] = useState(false);

  const dispatch = useDispatch();

  

  const handleMenu = () => {
    setNav(!nav);
  };

  const handleQuote = () => {
    setQuoteModal(true);
  };

  return (
    <div
      className=" d-flex flex-column min-vh-100  gap-3 w-100"
      style={{ fontFamily: "textFont" }}
    >
      <TopBar  toggleMenu={() => setToggleSide(!toggleSide)}  />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />
      <div className="d-flex flex-column align-items-center w-100">
        <img src={constctnImg} height={"400px"} alt="error image" />
        <p>Only Career page and Home Page is available for now</p>
        <Button
          onClick={() => navigate("/home")}
          className="text-light mt-3"
          style={{ maxWidth: "10em" }}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
