import React from "react";
import "./projects.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GitHubIcon from "@mui/icons-material/GitHub";
const Projects = () => {
  return (
    <div className="projects-section p-5" id="projects">
      <div className="d-flex justify-content-center gap-2">
        <div
          className="project-heading-line"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        ></div>
        <h2 className="text-center projects-title">Projects</h2>
      </div>
      <p className="projects-para text-center">Projects I’ve built so far</p>
      <div className="container md:pt-5 ">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-12">
            <div className="project-card">
              <div
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <img
                  src={require("../../assests/images/dummy-project-1.jpg")}
                  alt=""
                  width={"100%"}
                />
              </div>
              <div
                className="project-card-content"
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <h2>Project Title</h2>
                <p className="card-desc">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="card-tech">
                  Tech Stacks: React , Redux , MongoDB
                </p>
                <div className="project-card-link d-flex justify-content-between">
                  <div className="live-preview-link">
                    <span>
                      <a href="/">
                        <AttachFileIcon className="ico" />
                        Live Preview
                      </a>
                    </span>
                  </div>
                  <div className="github-link">
                    <span>
                      <a href="/">
                        <GitHubIcon className="ico" />
                        View Code
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="project-card">
              <div
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <img
                  src={require("../../assests/images/dummy-project-2.jpg")}
                  alt=""
                  width={"100%"}
                />
              </div>
              <div
                className="project-card-content"
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <h2>Project Title</h2>
                <p className="card-desc">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="card-tech">
                  Tech Stacks: React , Redux , MongoDB
                </p>
                <div className="project-card-link d-flex justify-content-between">
                  <div className="live-preview-link">
                    <span>
                      <a href="/">
                        <AttachFileIcon className="ico" />
                        Live Preview
                      </a>
                    </span>
                  </div>
                  <div className="github-link">
                    <span>
                      <a href="/">
                        {" "}
                        <GitHubIcon className="ico" />
                        View Code
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="project-card">
              <div
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <img
                  src={require("../../assests/images/dummy-projrct-3.jpg")}
                  alt=""
                  width={"100%"}
                />
              </div>
              <div
                className="project-card-content"
                data-aos="fade"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <h2>Project Title</h2>
                <p className="card-desc">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="card-tech">
                  Tech Stacks: React , Redux , MongoDB
                </p>
                <div className="project-card-link d-flex justify-content-between">
                  <div className="live-preview-link">
                    <span>
                      <a href="/">
                        <AttachFileIcon className="ico" />
                        Live Preview
                      </a>
                    </span>
                  </div>
                  <div className="github-link">
                    <span>
                      <a href="/">
                        <GitHubIcon className="ico" />
                        View Code
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
