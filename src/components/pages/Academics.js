import React, { Component } from "react";
import "../../App.css";
import "./Academics.css";
import { Button, Modal } from "react-bootstrap";

class Academics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }
  render() {
    return (
      <div className="academics">
        <p>
          MIT Class of '23 | Bachelor’s of{" "}
          <strong>
            <a href="https://bcs.mit.edu/academic-program/undergraduate/course-6-9-computation-and-cognition">
              Computation and Cognition
            </a>
          </strong>
        </p>
        <p>- Computer + Brain & Cognitive Sciences</p>
        <p>- Relevant Coursework</p>
        <Modal show={this.showModal}>
          <Modal.Header>Hi</Modal.Header>
          <Modal.Body>asdfasdf</Modal.Body>
          <Modal.Footer>This is the footer</Modal.Footer>
        </Modal>
        <p>
          - Activities on campus include:
          <p>- FLI Communication Director </p>
          <p>- Exec member for Women in EECS Professional Development Team </p>
          <p>- Oboist in the Wind Ensemble and Videogame Orchestra</p>
        </p>
      </div>
    );
  }
}

export default Academics;
