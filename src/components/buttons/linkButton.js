import React from "react";
import { Button } from "react-bootstrap";

export default function LinkButton({title,action,disable, to}){
    return(
        <a href={to} target="_">
        <Button 
        onClick={action}
        disabled={disable}
        className="py-1 text-light mt-2 rounded rounded-0" 
        style={{minWidth:'7em',maxWidth:'7em', fontFamily:'textFont'}}>{title}</Button>
        </a>
    )

}