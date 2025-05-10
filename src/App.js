import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import HRMS from "./Components/HRMS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/contact";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router basename="/ReactResume">
        <Navbar />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/HRMS" element={<HRMS />} />
        </Routes>
          
        <Contact />
        {/* <Home/> */}
      </Router>
    </>
  );
}

export default App;
