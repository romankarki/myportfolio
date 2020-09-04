import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const element = <FontAwesomeIcon icon={faCube} />;

function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <Link
        activeClass="active"
        to="showcase"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="navbar__logo">
          <h2>
            <span className="highlight">{element}</span> Ro
            <span className="highlight">man</span>
          </h2>
        </div>
      </Link>
      <ul className="navbar__list">
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            style={{ cursor: "pointer" }}
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            style={{ cursor: "pointer" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            style={{ cursor: "pointer" }}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
