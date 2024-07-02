import React from "react";
import "./footer.css";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
  const handleEmailClick = () => {
    window.location.href = "mailto:aliaminidrees@gmail.com";
  };
  return (
    <div
      id="footer"
      className="footer-section p-5"
    >
      <div className="container d-flex justify-content-between pt-5 pb-2">
        <div className="left-side d-flex">
          <IntegrationInstructionsIcon className="fs-3 logo-icon-footer" />
          <a
            className="top-nav-para"
            href="/"
            style={{ textDecoration: "none", color: "#a5d7e8" }}
          >
            Ali's Portfolio
          </a>
        </div>
        <div className="right-side d-flex justify-content-around gap-3">
          <div className="number">
            <p>+92 3172884582</p>
          </div>
          <div className="mail">
            <p onClick={handleEmailClick}>aliaminidrees@gmail.com</p>
          </div>
          <div className="social">
            <a href="https://github.com/AlimEmon0333" target="_blank">
              <GitHubIcon className="icon-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ali-amin-b980a9305/"
              target="_blank"
            >
              <LinkedInIcon className="icon-2" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="container d-flex justify-content-center pt-5 pb-2">
        <div className="last-line-footer">
          <p> &copy; {currentYear} Muhammad Ali. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
