import React from "react";
import "./contact.css";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:aliaminidrees@gmail.com";
  };
  return (
    <div className="contact-section" id="contact">
      <div className="d-flex justify-content-center gap-2">
        <div
          className="contact-heading-line"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        ></div>
        <h2 className="text-center">Contact Info</h2>
      </div>
      <p>Have a question or want to work together?</p>
      <div className="container ">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-12 contact-card">
            <div className="card-img">
              <img
                src="https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000"
                alt=""
              />
            </div>
            <div className="card-content">
              <h1>Email</h1>
              <p onClick={handleEmailClick} style={{ cursor:"pointer" }}>aliaminidrees@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12 contact-card">
            <div className="card-img">
              <img
                src="https://img.icons8.com/?size=100&id=108647&format=png&color=000000"
                alt=""
              />
              <div className="card-content">
                <h1>Location</h1>
                <p>Karachi , Pakistan</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12 contact-card">
            <div className="card-img">
              <img
                src="https://img.icons8.com/?size=100&id=sXhQ3VwDMMBx&format=png&color=000000"
                alt=""
              />
            </div>
            <div className="card-content">
              <h1>Get in Touch</h1>
              <p>
                <a href="https://wa.me/+923172884582" target="_blank">
                  {" "}
                  +92 3172884582
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
