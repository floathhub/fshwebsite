import React, { useState } from "react";
import styles from "./career.module.css";
import SideBar from "../components/sideBar";
import TopBar from "../components/topBar";
import InputFieldNumber from "../components/inputfields/inputNumber";
import InputField from "../components/inputfields/input";
import PrimaryButton from "../components/buttons/primaryButton";
import { Form,FormCheck } from "react-bootstrap";
import InputFieldEmail from "../components/inputfields/inputEmail";
import TextAreaField from "../components/inputfields/textArea";

export default function AServicePage() {
  const [toggleSide, setToggleSide] = useState(false);
  const handleUserInput=(userInput)=>{
    console.log(userInput)
  }

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

  const handleAction = ()=>{
  alert('Call 08166064166 to Complete registration')
  }
  return (
    <div className="w-100 bg-danger min-vh-100">
      <TopBar toggleMenu={() => setToggleSide(!toggleSide)} />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />
      <div className="w-100 bg-info  d-flex justify-content-center flex-column text-center"
          style={{ fontFamily: "titleFontMD", minHeight: "5em" }}>
        <h5>Thank you for Choosing our</h5>
          <h2 style={{ fontFamily: "titleFont" }}>Software Solution</h2>
          <p>Service Option</p>
      </div>

      <div className="w-100 d-flex flex-column justify-content-center py-3">
      <div className="text-center mt-3">
            Kindly fill the form below so we understand your intensions better
            and <br /> get to know you.
          </div>
        <Form className={`${styles.form} border d-flex gap-2 flex-column py-3 justify-content-center align-items-center `} style={{width:"300px"}}>
        
        <InputField title="Fullname" />
            <InputFieldEmail title="Email" />
            <InputFieldNumber title="Phone" />
            <InputField title="Subject" />
            <TextAreaField title="Brief Description" />
            <div className="d-flex w-100 justify-content-center gap-2">
              <p>Should we contact you?</p>
              <FormCheck />
            </div>
            <PrimaryButton title="Submit" />
        
        </Form>
      </div>

      <div className="">

      </div>
    </div>
  );
}
