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

  toggleModal = () => {
      console.log(this.state.showModal);
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div className="academics">
        <h4>
          MIT Class of '23 | Bachelor’s of{" "}
          <strong>
            <a href="https://bcs.mit.edu/academic-program/undergraduate/course-6-9-computation-and-cognition">
            <div className="modal-link">Computation and Cognition</div>
            </a>
          </strong>
        </h4>
        <p>- Computer Science + Brain & Cognitive Science</p>
        <p>- Relevant <div onClick={this.toggleModal} className="modal-link">Coursework</div></p>
        <Modal show={this.state.showModal}>
          <Modal.Header><div className="course-header">Some of my favorite areas of study in college!</div></Modal.Header>
          <Modal.Body>
                  <ul className="courses">
                    <li>Solid-State Chemistry</li>
                    <li>Multivariable Calculus I and II</li>
                    <li>Physics: Classical Mechanics and Electromagnetism</li>
                    <li>Problems of Philosophy</li>
                    <li>Intros to Computer Science and Data Science</li>
                    <li>Mathematics for Computer Science</li>
                    <li>Harmony and Counterpoint</li>
                    <li>ConLangs: How to Construct a Language</li>
                    <li>Fundamentals of Programming</li>
                    <li>Algorithms</li>
                    <li>Electronic Music Composition</li>
                    <li>Web Lab: A Web Programming Class and Competition</li>
                    <li>MIT Wind Ensemble</li>
                    <li>Undergrad research in the Digital Humanities Lab and the Synthetic Neurobiology Group@MIT</li>
                  </ul>
          </Modal.Body>
          <Modal.Footer><button onClick={this.toggleModal}>Close</button></Modal.Footer>
        </Modal>
        <p>
          - Meaningful Roles and Activities:
          <p>- Exec member for Women in EECS Professional Development Team </p>
          <p>- Oboist in the Wind Ensemble and Videogame Orchestra</p>
          <p>- Questbridge Scholar</p>
          <p>- FLI Communication Director </p>
          <p>- FLIPOP Freshman Counselor</p>
        </p>
      </div>
    );
  }
}

export default Academics;
