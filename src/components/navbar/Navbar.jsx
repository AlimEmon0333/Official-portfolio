import React, { useState } from "react";
import "./Navbar.css";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import BackspaceIcon from "@mui/icons-material/Backspace";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`top-nav ${scrolled ? "scrolled" : ""}`}>
      <div
        className="container"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <IntegrationInstructionsIcon className="fs-3 logo-icon" />
            <a
              className="top-nav-para"
              href="/"
              style={{ textDecoration: "none" }}
            >
              Ali's Portfolio
            </a>
          </div>
          <div className={`top-nav-links ${open ? "open" : ""}`}>
            <a href="#About" onClick={() => setOpen(false)}>
              About Me
            </a>
            <a href="#tech-stack" onClick={() => setOpen(false)}>
              Tech Stack
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact Me
            </a>
            <div className="d-flex gap-2 ">
              <a href="https://github.com/AlimEmon0333" target="_blank">
                <GitHubIcon className="github-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ali-amin-b980a9305/"
                target="_blank"
              >
                <LinkedInIcon className="linkedin-icon" />
              </a>
            </div>
          </div>
          <div className="top-nav-toggle" onClick={toggleNavbar}>
            {open ? <BackspaceIcon /> : <FormatAlignRightIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
