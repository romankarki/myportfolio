import React from "react";
import "./About.css";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import Resume from "../images/portfolio.pdf";

const element = <FontAwesomeIcon icon={faGraduationCap} />;
const school = <FontAwesomeIcon icon={faSchool} />;
function About() {
  return (
    <div id="about" className="about">
      <div className="about_education">
        <h1 style={{ color: "black" }}>
          {element}
          <span className="highlight"> Edu</span>cati
          <span className="highlight">on </span>
        </h1>
        <h2
          style={{
            color: "#333",
            padding: "1rem 0rem",

            lineHeight: "2rem",
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          <span className="highlight">{school}</span> Kathmandu Engineering
          College
        </h2>
        <hr />
        <h4
          style={{
            color: "#333",
            lineHeight: "2rem",
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Electronics and Communication Engineering,
          <br />
          Kalimati,Kathmandu
        </h4>
      </div>
      <div className="about__me">
        <h1>
          <span className="highlight">About</span> me
        </h1>
        <p
          style={{
            color: "#333",
            padding: "1rem 0rem",
            fontSize: "18px",
            lineHeight: "2rem",
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Hi, I'm Roman Karki, an Electronics and Communication Engineer. I love
          to transform ideas into reality using code. I am passionate about
          using code to create awesome experiences and solving real life
          problems.
        </p>

        <a
          href={Resume}
          style={{ textDecoration: "none" }}
          className="download"
          download
        >
          <Button
            className="download__button"
            style={{
              background: "teal",
              color: "white",
              border: "1px solid teal",
              alignItems: "center",
            }}
          >
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default About;
