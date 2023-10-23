import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CareerPage from "./pages/career/career";
import LoaderPage from "./components/loaderPage";
import ErrorPage from "./pages/errorPage";
import ConstructionPage from "./pages/constructionPage";
import ServicePage from "./pages/service";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoaderPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/services" element={<ConstructionPage/>} />
        <Route path="/products" element={<ConstructionPage/>} />
        <Route path="/about" element={<ConstructionPage/>} />
        <Route path="/service/:id" element={<ServicePage/>}/>
        {/* <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
