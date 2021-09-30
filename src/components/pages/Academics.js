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
        <h3>MIT Class of '23</h3>
        <h4>Bachelor’s of{" "}
          <strong>
            <a href="https://bcs.mit.edu/academic-program/undergraduate/course-6-9-computation-and-cognition">
            <div className="modal-link">Computation and Cognition</div>
            </a>
          </strong> | Minor in Music
        </h4>
        <p>- Computer Science + Brain & Cognitive Sciences</p>
        <p>- Relevant <div onClick={this.toggleModal} className="modal-link">Coursework</div></p>
        <Modal show={this.state.showModal}>
          <Modal.Header><div className="course-header">Some of my favorite areas of study in college:</div></Modal.Header>
          <Modal.Body>
                  <ul className="courses">
                    <h4>Freshman Fall</h4>
                    <li>Solid-State Chemistry</li>
                    <li>Multivariable Calculus</li>
                    <li>Physics I: Classical Mechanics</li>
                    <li>Problems of Philosophy</li>
                    <hr></hr>
                    <h4>Freshman Spring</h4>
                    <li>Intro to Computer Science</li>
                    <li> Intro to Comp. Thinking and Data Science</li>
                    <li>Mathematics for Computer Science</li>
                    <li>Harmony and Counterpoint</li>
                    <li>Physics II: Electromagnetism</li>
                    <hr></hr>
                    <h4>Sophomore Fall</h4>
                    <li>ConLangs: How to Construct a Language</li>
                    <li>Fundamentals of Programming</li>
                    <li>Algorithms</li>
                    <li>Electronic Music Composition</li>
                    <hr></hr>
                    <h4>Sophomore January Term</h4>
                    <li>Web Lab: A Web Programming Class and Competition</li>
                    <hr></hr>
                    <h4>Sophomore Spring</h4>
                    <li>Modern Art and Mass Culture</li>
                    <li>Probability</li>
                    <li>Biology (introduction to biochemistry, molecular biology and genetics)</li>
                    <li>Intro to Psychological Science</li>
                    <li>Linear Algebra</li>
                    <hr></hr>
                    <h4>Junior Fall</h4>
                    <li>Intro to Machine Learning</li>
                    <li>Introduction to Neuroscience</li>
                    <li>Infant & Childhood Cognition</li>
                    <li>Computational Music Theory</li>
                    <hr></hr>
                    <li>Undergrad research in the Digital Humanities Lab and the Synthetic Neurobiology Group@MIT</li>
                  </ul>
          </Modal.Body>
          <Modal.Footer><button onClick={this.toggleModal}>Close</button></Modal.Footer>
        </Modal>
        <p>
          - Meaningful Roles and Activities:
          <p>- Questbridge Scholar</p>
          <p>- FLI@MIT Co-Director </p>
          <p>- Oboist in MIT Wind Ensemble and Videogame Orchestra</p>
          <p>- Library Chair on Simmons Hall Student Government </p>
        </p>
      </div>
    );
  }
}

export default Academics;
