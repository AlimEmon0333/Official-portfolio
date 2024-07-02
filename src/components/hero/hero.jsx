import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Typewritter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="hero" className="hero-section section-1 mt-5">
      <div className="container">
        <div className="row">
          <div
            className="col-md-5 col-lg-5 col-12 hero-left-cont"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <img
              src={require("../../assests/images/Ali.jpg")}
              alt=""
              width={"100%"}
            />
          </div>
          <div
            className="col-md-7 col-lg-7 col-12 hero-right-cont"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h1 className="first-heading">Hi 👋,</h1>
            <h1 className="second-heading">My Name is</h1>
            <h1 className="third-heading">Muhammad Ali</h1>
            <div className="d-flex gap-2 type-writer">
              <span>I Am a</span>
              <span className="fw-bold">
                <Typewritter
                  options={{
                    strings: [
                      "Mern Stack Developer",
                      "Android Developer",
                      "Frontend developer",
                      "Programmer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
