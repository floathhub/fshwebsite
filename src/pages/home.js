import React, { useState } from "react";
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

import homeVid from "../assets/videos/homeBgVid.webm";
import logo from "../assets/images/floatlogo.png";
import toggler from "../assets/icons/toggler.png"
import webIcon from "../assets/icons/webIcon.png";
import appIcon from "../assets/icons/googlePlayIcon.png";
import softIcon from "../assets/icons/softwareIcon.png";
import graphIcon from "../assets/icons/designIcon.png";
import homeBg from '../assets/images/home-image.png'

import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/home.css";

export default function Home() {
  const navigate = useNavigate();

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

  const dispatch = useDispatch();

  const handleMenu = () => {
    setNav(!nav);
  };

  const handleQuote = () => {
    setQuoteModal(true);
  };

  const postUserQuote = async (value) => {
    const res = await postQuotes(value);
    if (res?.status == 200) {
      setQuoteModal(false);
      setQuoteSucModal(true);
    }
  };

  return (
    <div className="w-100">
      <div className="navbar sticky-top bg-light shadow-sm p-3 px-4">
        <img src={logo} height="50em" />
        <img className="toggleBurger" src={toggler} height="15em" />
      </div>

      <div className="content" style={{ height: 400 }}>
        <div className="video-container min-vh-75">
          <video autoPlay loop muted className="background-video">
            <source src={homeVid} type="video/mp4" />
            {/* Add additional source elements for different video formats if necessary */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="overlay d-flex flex-column justify-content-center px-4"
          style={{ height: 500 }}
        >
          <h1 style={{ fontFamily: "titleFont" }}>
            Innovative Solution For <br /> Every Business Need.
          </h1>
          <p>
            Get custom made solutions that <br /> effectively solves your <br />{" "}
            business need.
          </p>
          <Button style={{ maxWidth: "10em" }}>
            <Link
              to="https://wa.me/message/NSIQY7RHQ2W4C1"
              className="text-secondary"
              style={{ textDecoration: "none" }}
            >
              Contact us
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-100 px-3 text-center mt-5">
        <h3 style={{ fontFamily: "titleFontMd" }}>
          We take out the bottle necks <br /> so you can focus on other <br />{" "}
          business matter.
        </h3>
      </div>

      <div className="serviceSection w-100 d-flex px-2 justify-content-center text-center gap-4 mt-4 p-0 m-0">
        {services.map((service) => (
          <div
            className="border d-flex flex-column justify-content-center gap-2 m-0 p-0 bor"
            style={{ minWidth: "170px", minHeight: "200px" }}
          >
            <div>
              <img src={service.icon} height={"100em"} alt="web icon" />
            </div>
            <div>
              <p style={{ wordBreak: "break-all", wordWrap: "break-word" }}>
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="detailSection justify-content-center align-items-center w-100 px-2 gap-4 mt-5 p-0 m-0">
       <div className="w-50 d-flex flex-column align-items-end px-3">
       <h4 style={{ fontFamily: "titleFontMd" }}>
            We do not beat around the bush with <br/> technical jargons, we simply identify <br/>
            your business problem <br/> & we fix it.
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
        <img src={homeBg} alt="home image" height={350} />
        </div>
      </div>

      <div className="detailSectionMobile  flex-column w-100 text-center justify-content-center px-2 py-4 mt-5 p-0 m-0">
        <p style={{fontFamily:'textFont'}}>You can trust our service</p>
        <h3 style={{ fontFamily: "titleFontMd" }}>
          Quality service delivery is <br/> our number one <br/> priority
        </h3>
        <div>
        <img src={homeBg} alt="home image" height={350} />
        </div>
       
      </div>

      <div className="footer w-100 text-center text-align-center py-3 bg-secondary text-light">
        <p className="p-0 m-0">Floath Solution Hub All Right Reserved</p>
        <p className="p-0 m-0">(+234)8166064166</p>
      </div>
    </div>
  );
}
