import React from "react";
import "./Skills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const element1 = <FontAwesomeIcon icon={faPenFancy} />;
const python = <FontAwesomeIcon icon={["fab", "python"]} />;
const html = <FontAwesomeIcon icon={["fab", "html5"]} />;
const js = <FontAwesomeIcon icon={["fab", "js"]} />;
const css = <FontAwesomeIcon icon={["fab", "css3-alt"]} />;
const react = <FontAwesomeIcon icon={["fab", "react"]} />;
function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>
        <span className="highlight">{element1} Ski</span>lls
        {/* <hr style={{ color: "teal" }} /> */}
      </h1>
      <br />
      <h2 style={{ textAlign: "center", color: "teal" }}>
        Languages and Frameworks
        <br />
        <br />
        <hr />
      </h2>

      <div className="skills__list">
        <h1>{html}</h1>
        <h1>{css}</h1>
        <h1>{js}</h1>
        <h1>{react}</h1>
      </div>
      <div className="skills__list">
        <h1>{python}</h1>
        <h2
          style={{
            background: "teal",
            color: "white",
            width: "80px",
            borderRadius: "3px",
            paddingLeft: "3px",
          }}
        >
          django
        </h2>
        <h2
          style={{
            background: "teal",
            color: "white",
            width: "128px",
            borderRadius: "3px",
            paddingLeft: "3px",
          }}
        >
          Tensorflow
        </h2>
      </div>
    </div>
  );
}

export default Skills;
