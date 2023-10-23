import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
import InputField from "../components/inputfields/input";
import InputFieldNumber from "../components/inputfields/inputNumber";
import InputFieldEmail from "../components/inputfields/inputEmail";
import PrimaryButton from "../components/buttons/primaryButton";
import TextAreaField from "../components/inputfields/textArea";
import TopBar from "../components/topBar";

export default function ServicePage() {

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
  
  return (
    <div className="w-100 p-0 m-0">
        
        {/* <TopBar/> */}
        
        <div
          className="w-100 bg-info  d-flex justify-content-center flex-column text-center"
          style={{ fontFamily: "titleFontMD", minHeight: "5em" }}
        >
          <h5>Thank you for Choosing our</h5>
          <h2 style={{ fontFamily: "titleFont" }}>Software Solution</h2>
          <p>Service Option</p>
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ fontFamily: "titleFontMD" }}
        >
          <div className="text-center mt-3">
            Kindly fill the form below so we understand your intensions better
            and <br /> get to know you.
          </div>

          <Form
            className=" d-flex flex-column gap-3 border mt-4 py-3  w-100 align-items-center justify-content-center"
            style={{ maxWidth: "280px" }}
          >
            <InputField passInput={(e)=>setQuoteReq({...quoteReq, requesterName:e})} title="Fullname" />
            <InputFieldEmail passInput={(e)=>setQuoteReq({...quoteReq, requesterEmail:e})} title="Email" />
            <InputFieldNumber passInput={(e)=>setQuoteReq({...quoteReq, requesterPhone:e})} title="Phone" />
            <InputField passInput={(e)=>setQuoteReq({...quoteReq, requesterSubj:e})} title="Subject" />
            <TextAreaField passInput={(e)=>setQuoteReq({...quoteReq, requesterDesc:e})} title="Brief Description" />
            <div className="d-flex w-100 justify-content-center gap-2">
              <p>Should we contact you?</p>
              <FormCheck onChange={(e)=>setQuoteReq({...quoteReq, reqContact:e})}/>
            </div>
            <PrimaryButton title="Submit" />
          </Form>
        </div>
      </div>
   
  );
}
