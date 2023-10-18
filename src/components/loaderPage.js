import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const LoaderPage = ()=>{
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            Loading...
        </div>
    )
}

export default LoaderPage;