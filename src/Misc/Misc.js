import React from "react";
import "./Misc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookReader,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";

const element1 = <FontAwesomeIcon icon={faClock} />;
const element2 = <FontAwesomeIcon icon={faBookReader} />;
const element3 = <FontAwesomeIcon icon={faPencilRuler} />;

function Misc() {
  return (
    <div className="misc__main">
      <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>
        <span className="highlight">Welcome </span>to my portfolio.
      </h1>
      <div className="misc">
        <div className="item">
          <h1>{element3}</h1>
          <div>
            <h4>Hard Worker</h4>
          </div>
        </div>
        <div className="item">
          <h1>{element2}</h1>
          <div>
            <h4>Learner</h4>
          </div>
        </div>
        <div className="item">
          <h1>{element1}</h1>
          <div>
            <h4>Time Conscious</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Misc;
