import React from "react";
import "./Projects.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import expense from "../images/expenses.png";
import ecom from "../images/ecommerce.png";
import std from "../images/stdmgmt.png";
import todo from "../images/todo.png";

import library from "../images/library.png";
import monkey from "../images/monkey.png";
import burger from "../images/burger.png";
import landing from "../images/landing.png";

const element = <FontAwesomeIcon icon={faTools} />;
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        <span style={{ color: "teal" }}>{element}</span> My{" "}
        <span style={{ color: "teal" }}> Projects</span>
      </h1>
      <br />
      <div className="projects__section">
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://competent-fermat-a0d070.netlify.app/"
          target="_blank"
        >
          <Card src={std} title="Student Management System" />
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://github.com/romankarki/To-Do-App"
          target="_blank"
        >
          <Card src={todo} title="To-Do List App" />
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://github.com/romankarki/Expense-Tracker"
          target="_blank"
        >
          <Card src={expense} title="Expenses Tracking System" />
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://github.com/romankarki/E-commerce"
          target="_blank"
        >
          <Card src={ecom} title="Ecommerce Website" />
        </a>
      </div>
      <br />
      <br />
      <div
        className="projects__section"
        style={{ padding: "0 7rem" }}
        id="second"
      >
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://frosty-lamport-d2bac9.netlify.app/"
          target="_blank"
        >
          <Card src={landing} title="A Landing Page" />
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://burger-app-in-react.firebaseapp.com/"
          target="_blank"
        >
          <Card src={burger} title="Burger Builder App " />
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="https://github.com/romankarki/Fast-API-and-cnn"
          target="_blank"
        >
          <Card src={monkey} title="Monkey Species Detector" />
        </a>
      </div>
      <a
        href="https://github.com/romankarki"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined">See More Projects on Github</Button>
      </a>
    </div>
  );
}

export default Projects;
