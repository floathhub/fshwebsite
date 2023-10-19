import React, { useState } from "react";
import styles from "./career.module.css";
import SideBar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import InputField from "../../components/inputfields/input";

export default function CareerPage() {
  const [toggleSide, setToggleSide] = useState(false);
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
        <form className={`${styles.form} border d-flex flex-column py-3 justify-content-center align-items-center `} style={{width:"300px"}}>
          <InputField title={'Full name'} />
          <InputField />
          <InputField />
          <InputField />
        </form>
      </div>
    </div>
  );
}
