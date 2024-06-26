import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero" className="hero-section section-1 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 hero-left-cont">
            <img
              src={require("../../assests/images/Ali.jpg")}
              alt=""
              width={"100%"}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-12 her-right-cont">
            <h1>Hi 👋,</h1>
            <h1>My Name is</h1>                     
            <h1>Muhammad Ali</h1>                   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
