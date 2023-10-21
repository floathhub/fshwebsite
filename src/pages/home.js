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

export default function Home() {
  const navigate = useNavigate();
  const [toggleSide, setToggleSide] = useState(false);

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
      {/* <div className="navbar sticky-top bg-light shadow-sm p-3 px-4" style={{zIndex:50}}>
        <img src={logo} height="50em" alt="logo" />
        <img
        onClick={()=>setToggleSide(!toggleSide)}
          className="toggleBurger"
          src={toggler}
          height="15em"
          alt="toggle"
        />
      </div> */}

      <TopBar toggleMenu={() => setToggleSide(!toggleSide)} />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />

      <div
        className={`${styles.sectone} text-light d-flex flex-column justify-content-center`}
      >
        <h1 style={{ fontFamily: "titleFont" }}>
          Innovative Solution <br /> For All of Your <br /> Business Need.
        </h1>
        <p style={{ fontFamily: "textFont", fontWeight: "bolder" }}>
          Get custom made solutions that <br /> effectively solves your <br />{" "}
          business need.
        </p>
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
      <div className="w-100 px-3 text-center mt-5">
        <h3 style={{ fontFamily: "titleFontMd" }}>
          We take out the bottle necks <br /> so you can focus on other <br />{" "}
          business matter.
        </h3>
      </div>

      <div className="w-100 d-flex justify-content-center text-center">
        <hr className="w-50" />
      </div>
      <div className="w-100 px-3 text-center mt-4">
        <h3 style={{ fontFamily: "titleFontMd" }}>Our Services</h3>
      </div>
      <div className="serviceSection w-100 d-flex px-2 justify-content-center text-center gap-4 mt-4 p-0 m-0">
        {services.map((service) => (
          <div
            className="border d-flex flex-column justify-content-center gap-2 m-0 p-0 bor"
            style={{ minWidth: "150px", minHeight: "180px" }}
          >
            <div>
              <img src={service.icon} height={"100em"} alt="web icon" />
            </div>
            <div>
              <p className="" style={{ fontFamily: "textFont" }}>
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="detailSection justify-content-center align-items-center w-100 px-2 gap-4 mt-5 p-0 m-0">
        <div className="w-50 d-flex flex-column align-items-end px-3">
          <h4 style={{ fontFamily: "titleFontMd" }}>
            We do not beat around the bush with <br /> technical jargons, we
            simply identify <br />
            your business problem <br /> & we fix it.
          </h4>
          <ul className="mt-4">
            <li>Identify your need.</li>
            <li>Carry out extensive research.</li>
            <li>Provide scalable solutions.</li>
            <li>Help you make more profit</li>
            <li>Offer continuous business support</li>
          </ul>
        </div>
        <div className="w-50 d-flex align-items-center">
          <img src={homeBg} alt="homeimage" height={350} />
        </div>
      </div>

      <div className="detailSectionMobile  flex-column w-100 text-center justify-content-center px-2 py-4 mt-5 p-0 m-0">
        <p style={{ fontFamily: "textFont" }}>You can trust our service</p>
        <h3 style={{ fontFamily: "titleFontMd" }}>
          Quality service delivery is <br /> our number one <br /> priority
        </h3>
        <div>
          <img src={homeBg} alt="home image" height={350} width={250} />
        </div>
      </div>

      <div className="productSectionMobile  flex-column w-100 text-center justify-content-center px-2 py-4 mt-5 p-0 m-0">
        <h3 style={{ fontFamily: "titleFontMd" }}>Our Products</h3>
        <p className="p-0 m-0" style={{ fontFamily: "textFont" }}>
          Check out some of our products
        </p>
      </div>

      <div className="serviceSection w-100 d-flex px-2 justify-content-center text-center gap-4 p-0 m-0">
        {products.map((service) => (
          <div
            className="d-flex flex-column justify-content-center gap-2 m-0 p-0"
            style={{ minWidth: "150px", minHeight: "180px" }}
          >
            <div>
              <img src={service.icon} height={"50em"} alt="web icon" />
            </div>
            <div>
              <LinkButton
                to={service.path}
                disable={service.title == "instafame"}
                title="Demo"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${styles.testimonial} d-flex justify-content-center flex-column align-items-center py-3 w-100`}
        style={{ fontFamily: "textFont", minHeight: "300px" }}
      >
        <h3 className="text-center w-75 fontweight-bold m-0 p-0">
          Join the list of our successful business owners who trust us for all
          their business needs.
        </h3>

        <div className="serviceSection w-100 d-flex px-2 justify-content-center text-center gap-2 p-0 m-0">
          {services.map((service) => (
            <div
              className="border rounded-4 d-flex flex-column justify-content-center gap-3 m-0 p-0 mt-5 px-2"
              style={{ minWidth: "60px", minHeight: "90px" }}
            >
              <div>
                <img src={service.icon} height={"70em"} alt="web icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles.testimonial} d-flex justify-content-center flex-column align-items-center py-3 w-100 px-2`}
        style={{ fontFamily: "textFont", minHeight: "300px" }}
      >
        <h5 className="text-center w-100 fontweight-bold">
          Not just our words but by our works.
        </h5>

        <div
          className="serviceSection  rounded rounded-3 w-100 d-flex px-2 justify-content-center text-center gap-4 p-2 m-0"
          style={{ minWidth: "350px", maxWidth: "350px", minHeight: "150px" }}
        >
          <iframe
            className="rounded rounded-3"
            width="560"
            src="https://www.youtube.com/embed/xpvWA3ABUfI?si=KSugFJB6Har_PwZ2"
            title="Review"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="footer w-100 text-center text-align-center py-3 bg-secondary mt-4 text-light" style={{fontFamily:'textFont'}}>
        <p className="p-0 m-0">Floath Solution Hub All Right Reserved</p>
        <p className="p-0 m-0">(+234)8166064166</p>
      </div>
    </div>
  );
}
