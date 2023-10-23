import React from "react";
import { Button } from "react-bootstrap";

export default function PrimaryButton({title,action, buttonType}){
    return(
        
        <Button 
        type={buttonType}
        onClick={action}
        className="py-2 text-light mt-2 rounded rounded-1" 
        style={{minWidth:'15em', fontFamily:'textFont'}}>{title}</Button>
    )

}