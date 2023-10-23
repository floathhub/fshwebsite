import React, { useEffect, useState } from "react";
import { FormCheck, Form } from "react-bootstrap";

import styles from "./css/home.module.css";
import SideBar from "../components/sideBar";

import InputField from "../components/inputfields/input";
import InputFieldEmail from "../components/inputfields/inputEmail";
import InputFieldNumber from "../components/inputfields/inputNumber";
import TextAreaField from "../components/inputfields/textArea";

// import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../components/topBar";
import PrimaryButton from "../components/buttons/primaryButton";
import QuoteModal from "../components/modal/quoteModal";

export default function ServicePage() {
  const navigate = useNavigate();
  const [toggleSide, setToggleSide] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);

  const [quoteReq, setQuoteReq] = useState({
    serviceId: "",
    serviceName: "",
    requesterName: "",
    requesterEmail: "",
    requesterPhone: "",
    requesterDesc: "",
    requesterSub: "",
    reqContact: false,
  });

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

  const checkContent = (e)=>{
    e.preventDefault();
    console.log(quoteReq);
  }

  return (
    <div style={{ fontFamily: "textFont" }}>
      <TopBar toggleMenu={() => setToggleSide(!toggleSide)} />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />
      <QuoteModal on={quoteModal} toggle={() => setQuoteModal(!quoteModal)} />

      <div
        className="w-100 bg-info  d-flex justify-content-center flex-column text-center"
        style={{ fontFamily: "titleFontMD", minHeight: "10em" }}
      >
        <h5>Thank you for Choosing our</h5>
        <h2 style={{ fontFamily: "titleFont" }}>Software Solution</h2>
        <p>Service Option</p>
      </div>

      <div
        className=""
        
      >
        <div className="text-center mt-3 px-2">
          Kindly fill the form below so we understand your <br /> intensions better and{" "}
           get to know you.
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <Form
        onSubmit={(e)=>checkContent(e)}
          className=" d-flex flex-column gap-3 border mt-2 py-3  w-100 align-items-center justify-content-center"
          style={{ maxWidth: "280px" }}
        >
          <InputField
            passInput={(e) => setQuoteReq({ ...quoteReq, requesterName: e })}
            title="Fullname"
          />
          <InputFieldEmail
            passInput={(e) => setQuoteReq({ ...quoteReq, requesterEmail: e })}
            title="Email"
          />
          <InputFieldNumber
            passInput={(e) => setQuoteReq({ ...quoteReq, requesterPhone: e })}
            title="Phone"
          />
          <InputField
            passInput={(e) => setQuoteReq({ ...quoteReq, requesterSub: e })}
            title="Title"
          />
          <TextAreaField
            passInput={(e) => setQuoteReq({ ...quoteReq, requesterDesc: e })}
            title="Brief Description"
          />
          <div className="d-flex w-100 justify-content-center gap-2">
            <p>Should we contact you?</p>
            <FormCheck
              onChange={(e) => setQuoteReq({ ...quoteReq, reqContact: e })}
            />
          </div>
          <PrimaryButton buttonType='submit' title="Submit" />
        </Form>
      </div>

      
      <div className="mt-3">

      </div>
    </div>
  );
}
