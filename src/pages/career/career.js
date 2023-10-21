import React, { useState } from "react";
import styles from "./career.module.css";
import SideBar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import InputField from "../../components/inputfields/input";
import InputFieldPhone from "../../components/inputfields/inputNumber";
import PrimaryButton from "../../components/buttons/primaryButton";
import { Form } from "react-bootstrap";

export default function CareerPage() {
  const [toggleSide, setToggleSide] = useState(false);
  const handleUserInput=(userInput)=>{
    console.log(userInput)
  }

  const handleAction = ()=>{
  alert('Call 08166064166 to Complete registration')
  }
  return (
    <div className="w-100">
      <TopBar toggleMenu={() => setToggleSide(!toggleSide)} />
      <SideBar show={toggleSide} off={() => setToggleSide(!toggleSide)} />
      <div className={`${styles.section1} text-light text-center py-5`}>
        <h3 style={{ fontFamily: "titleFont" }}>
          Kick Off Your Career <br /> In Tech With Us.
        </h3>
        <p style={{ fontFamily: "textFont" }}>Join our amazing team.</p>
      </div>

      <div className="w-100 d-flex justify-content-center py-3">
        <Form className={`${styles.form} border d-flex gap-2 flex-column py-3 justify-content-center align-items-center `} style={{width:"300px"}}>
        
          <InputField title={'Full name'} passInput={(e)=>handleUserInput(e)} />
          <InputField title='Email' passInput={(e)=>handleUserInput(e)} />
          <InputFieldPhone  passInput={(e)=>handleUserInput(e)}  title='Phone Number'/>
          <InputField title='Course of Choice' passInput={(e)=>handleUserInput(e)} />
          <PrimaryButton action={handleAction} title={'Register'}/>
        
        </Form>
      </div>
    </div>
  );
}
