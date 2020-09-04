import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCube,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Form from "./Form.js";

const mail = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const element = <FontAwesomeIcon icon={faCube} />;
const address = <FontAwesomeIcon icon={faHome} />;

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__detail">
        <div className="detail">
          <h2 style={{ color: "black" }}>
            <span className="highlight">{element}</span> Ro
            <span className="highlight">man</span>
          </h2>
        </div>
        <div className="detail" style={{ paddingTop: "1rem" }}>
          <h1 style={{ color: "teal" }}>{mail}</h1>
          <h3 style={{ color: "#333" }}>romnkrki@gmail.com</h3>
        </div>
        <div className="detail" style={{ paddingTop: "1rem" }}>
          <h1 style={{ color: "teal" }}>{phone}</h1>
          <h3 style={{ color: "#333" }}>+(977)-9803661914</h3>
        </div>
        <div className="detail" style={{ paddingTop: "1rem" }}>
          <h1 style={{ color: "teal" }}>{address}</h1>
          <h3 style={{ color: "#333" }}>Kathmandu, Nepal</h3>
        </div>
        <div className="phone_detail" style={{ paddingTop: "1rem" }}>
          <p style={{ color: "#333", fontSize: "16px" }}>
            Feel Free To contact me. I'll respond back at my earliest
            convenience.
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
