import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import HomeContainer from "./pages/containers/home-container";
export default function () {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer/>}>
            <Route index element={<HomePage/>}/>
            </Route>
          
        </Routes>
    )
}