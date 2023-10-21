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

import styles from "./css/home.module.css";

import fshErrorImg from "../assets/images/fsherrorPage.jpg";

// import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/home.css";
import TopBar from "../components/topBar";

export default function ErrorPage() {
  const navigate = useNavigate();
  const [toggleSide,setToggleSide] = useState(false);

  

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

    <div className=" d-flex flex-column align-items-center min-vh-100 justify-content-center w-100" style={{fontFamily:'textFont'}}>
      <img src={fshErrorImg} height={'300px'} alt="error image"/>
      <h3>You hit a wrong route</h3>
      <Button onClick={()=>navigate('/home')} className="text-light">Go Back Home</Button>
    </div>
  );
}
