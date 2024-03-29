import React, { Component } from "react";
import "../../App.css";
import "./About.css";
import email from "../../resources/email.png";
import linkedin from "../../resources/linkedin.webp";
import github from "../../resources/github.webp";
import resume from "../../resources/resume.png";
import { Tooltip} from "@material-ui/core";
import { Button } from "bootstrap";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <p className="blurb">
          I'm an undergrad student from the Pacific Northwest studying Computer
          Science and Cognition in Boston. 
        </p>
        <p className="blurb">
          I care about the intersection where technology meets human intelligence. I
         believe that insight on human behavior can help us design
          more impactful software, while prioritizing the well-being of the person behind
          the computer screen.
        </p>
        {/* <p className="blurb">
          I also play the oboe and saxophone, and occasionally do musical
          things!
        </p> */}

        <div className="media-links">
          <a href="mailto:cristafalk@gmail.com">
            <img src={email} />
          </a>
          <a href="https://www.linkedin.com/in/cristafalk/">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/Crista2019/">
            <img src={github} />
          </a>
          <a href="https://drive.google.com/drive/folders/1GgPtZOy7xKbn5IcKyLcNuV9yJYsTNPOY?usp=sharing">
            <img src={resume} />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
