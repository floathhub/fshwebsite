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
    <div>
      <FormGroup>
        <FormLabel>{title}</FormLabel>
        <FormControl className="rounded rounded-1 m-0" onChange={(e)=>passInput(e.target.value)}/>
      </FormGroup>
    </div>
  );
}
