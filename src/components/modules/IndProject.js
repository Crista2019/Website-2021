import React, { Component } from "react";
import "../../App.css";
import "./IndProject.css";

class IndProject extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="projects-container">
          {this.props.projects.map((project) => (
            <div class="single-project" key={project.id}>
              <p>
                <strong>{project.title.toUpperCase()}</strong>{" "}
              </p>
              <p>{project.date}</p>
              {/* <div className="proj-img"></div> */}
              <div className="proj-description">
                <p>{project.description}</p>
                <a href={project.link}>Check out the Project!</a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default IndProject;
