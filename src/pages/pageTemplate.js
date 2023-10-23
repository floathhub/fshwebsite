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
import SideBar from "../components/sideBar";

import homeVid from "../assets/videos/homeBgVid.webm";
import logo from "../assets/images/floatlogo.png";
import toggler from "../assets/icons/toggler.png";
import webIcon from "../assets/icons/webIcon.png";
import appIcon from "../assets/icons/googlePlayIcon.png";
import softIcon from "../assets/icons/softwareIcon.png";
import graphIcon from "../assets/icons/designIcon.png";
import homeBg from "../assets/images/home-image.png";

import { products } from "../constants/constants";
import loaderImage from "../assets/images/fshloader.gif";

// import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/home.css";
import TopBar from "../components/topBar";
import PrimaryButton from "../components/buttons/primaryButton";
import LinkButton from "../components/buttons/linkButton";
import QuoteModal from "../components/modal/quoteModal";

export default function ServicePage() {
  const navigate = useNavigate();
  const [toggleSide, setToggleSide] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);

  const services = [
    {
      icon: webIcon,
      title: "Business Websites",
    },
    {
      icon: appIcon,
      title: "Mobile Application",
    },
    {
      icon: softIcon,
      title: "Software Solutions",
    },
    {
      icon: graphIcon,
      title: "Graphics Design",
    },
  ];

  const [nav, setNav] = useState(false);

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

  // const postUserQuote = async (value) => {
  //   const res = await postQuotes(value);
  //   if (res?.status == 200) {
  //     setQuoteModal(false);
  //     setQuoteSucModal(true);
  //   }
  // };
  // const [timer, setTimer] = useState(2);

  // const handleLoader = () => {

  //     const countDown = setInterval(() => {
  //       if (timer > 0) {
  //         setTimer(timer - 1);
  //       } else {
  //         clearInterval(countDown);
  //         setShowLoader(false);
  //       }
  //     }, 1000);
  //   }
  // ;

  // useEffect(() => {
  //   handleLoader();
  // });

  return (
    <div className="w-100">
      <TopBar toggleMenu={() => setToggleSide(!toggleSide)} />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />
      <QuoteModal on={quoteModal} toggle={() => setQuoteModal(!quoteModal)} />

      

      <div
        className="footer w-100 text-center text-align-center py-3 bg-secondary mt-4 text-light"
        style={{ fontFamily: "textFont" }}
      >
        <p className="p-0 m-0">Floath Solution Hub All Right Reserved</p>
        <p className="p-0 m-0">(+234)8166064166</p>
      </div>
    </div>
  );
}
