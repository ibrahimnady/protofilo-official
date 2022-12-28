import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" ,color:"gold" }}>
            Hi Everyone, I am <span className="purple">Ibrahim Nady </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />I am Interested in the AI and Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Business
            </li>
            <li className="about-activity">
              <ImPointRight /> Health Care and Phamacy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You Never Fail Until You Stop Trying"{" "}
          </p>
          <footer className="blockquote-footer">Ibrahim Nady-</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
