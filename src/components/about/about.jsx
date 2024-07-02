import React from "react";
import "./about.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const About = () => {
  return (
    <div id="About" className="about-section ">
      <div className="d-flex justify-content-center gap-2">
        <div
          className="about-heading-line"
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        ></div>
        <h2 className="text-center">About Me</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-left-container">
              <img
                src={require("../../assests/images/Ali-without-bg.png")}
                alt=""
                data-aos="fade"
                data-aos-offset="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="about-right-container"
              data-aos="fade"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <p>
                Hi, I'm Muhammad Ali, a MERN stack developer with strong skills
                in React. I build responsive and user-friendly web applications
                using the latest technologies. I have basic level proficiency in
                MongoDB, Node.js, and Express.js. Additionally, I have 60%
                command over Firebase for backend services and 85% command over
                Bootstrap for design, and I use Material UI to create clean and
                modern interfaces. Explore my portfolio to see my work and
                projects.
                <div>
                  <button className="cv-preview">Check Resume</button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
