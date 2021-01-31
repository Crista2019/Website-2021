import React, { Component } from "react";
import "../../App.css";
import "./About.css";
import email from "../../resources/email.png";
import linkedin from "../../resources/linkedin.webp";
import github from "../../resources/github.webp";
import resume from "../../resources/resume.png";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <h1>
          <i>Hi!</i>
        </h1>
        <h1>I'm Crista.</h1>
        <hr></hr>
        <p className="blurb">
          I'm an undergrad student from the PNW studying CS and BCS.
        </p>
        <p className="blurb">
          I find myself fascinated at the intersection between machine and human
          intelligence and how we can use insights from the study of
          neuroscience to design more effective and human empathetic software.
        </p>
        <p className="blurb">
          I also play the oboe and saxophone, and occasionally do musical
          things!
        </p>

        <div className="media-links">
          <a href="google.com"><img src={email}/></a>
          <a href="google.com"><img src={linkedin}/></a>
          <a href="google.com"><img src={github}/></a>
          <a href="google.com"><img src={resume}/></a>
        </div>
      </div>
    );
  }
}

export default About;
