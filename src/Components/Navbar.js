// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "animate.css";

// import wow from 'wowjs';

export default function Navbar() {
  const handleNavLinkClick = (event) => {
    var targetHash = event.target.hash;
    if (targetHash != "") {
      targetHash = targetHash.replace("/", "");
      const targetElement = document.querySelector(targetHash);
      console.log(targetElement);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 45,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="text-primary fw-bold m-0">syed jahanzaib</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse justify-content-between py-4 py-lg-0"
          id="navbarCollapse"
        >
          {/* <HashRouter> */}
          <div className="navbar-nav ms-auto py-0">
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/"
            >
              Home
            </Link>
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/#about"
            >
              About
            </Link>
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/#skill"
            >
              Skills
            </Link>
            {/* <a href="index.html#home" className="nav-item nav-link active">Home</a> */}
            {/* <a href="index.html#about" className="nav-item nav-link">About</a>
                <a href="index.html#skill" className="nav-item nav-link">Skills</a> */}
          </div>
          <a
            href="index.html"
            className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block"
          >
            <h1 className="text-primary fw-bold m-0">syed jahanzaib</h1>
          </a>
          <div className="navbar-nav me-auto py-0">
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/#service"
            >
              Services
            </Link>
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/#project"
            >
              Projects
            </Link>
            <Link
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
              to="/#contact"
            >
              Contact
            </Link>
          </div>
          {/* </HashRouter> */}
        </div>
      </nav>
    </>
  );
}
