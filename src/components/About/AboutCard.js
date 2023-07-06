import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Caleb Carnett </span>
            from <span className="purple"> North Bethesda, Maryland.</span>
            <br /> Studying software development full time.
            <br />
            Additionally, I am military spouse and career transitioner.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Play Pickleball
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Going on Hikes
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
