import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import IdeasPage from "./pages/ideasPage";
import LoaderPage from "./components/loaderPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoaderPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
