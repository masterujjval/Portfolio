import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi There, I am <span className="purple">Ujjwal Gupta </span>
            from <span className="purple">Madhya Pradesh, India.</span>
            <br />
            I am currently a student pursuing my B.Tech degree in the field of <span className="purple">Artificial Intelligence </span>and<span className="purple "> Machine Learning</span>
            <br />
            <br />
            Things I love to do apart from Coding and building projects!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Bug Bounty Hunting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Work Out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do what excites"{" "}
          </p>
          <footer className="blockquote-footer">Ujjwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
