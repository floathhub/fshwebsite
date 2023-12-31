import React from "react";
import style from "./inputfield.module.css";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export default function InputField({
  icon,
  title,
  placeholder,
  type,
  passInput,
  toggleShow,
}) {
  return (
    <div className="d-flex">
      <FormGroup style={{fontFamily:'textFont',color:'#5a5a5a'}}>
        <FormLabel className="p-0 m-0">{title}</FormLabel>
        <FormControl
        autoCapitalize=""
        className="rounded rounded-1 m-0" 
        onChange={(e)=>passInput(e.target.value)}
        style={{color:'#5a5a5a',minWidth:'15em'}}
        type="text"
        placeholder={placeholder}
        />
      </FormGroup>
    </div>
  );
}
