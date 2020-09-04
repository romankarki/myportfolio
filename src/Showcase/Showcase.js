import React from "react";
import "./Showcase.css";
import Navbar from "../Navbar/Navbar";
import Typed from "react-typed";
import { Typography, Button } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
// import Button from "@material-ui/core/Button";

function Showcase() {
  return (
    <div className="showcase" id="showcase">
      <Navbar />
      <div className="showcase__content">
        <Typography variant="h3">
          <Typed strings={["Hi, I'm Roman Karki."]} typeSpeed={40} />
          <br />
        </Typography>
        <Typography style={{ fontSize: "22px" }}>
          <Typed
            strings={[
              "",
              "",
              "Software Development",
              "Machine Learning",
              "AI Enthusiast",
              "",
            ]}
            typeSpeed={20}
            backSpeed={30}
            loop
          />
        </Typography>

        <br />
        <br />
        <Link to="about" spy={true} smooth={true} offset={-150} duration={500}>
          <Button
            className="showcase__button"
            style={{ color: "teal", border: "1px solid teal" }}
          >
            More About Me
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Showcase;
