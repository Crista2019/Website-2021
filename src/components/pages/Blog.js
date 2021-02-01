import React, { Component } from "react";
import "../../App.css";
import "./Blog.css";
import MouseParticles from "react-mouse-particles";

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Nothing here yet!</p>
        <MouseParticles g={1} color="random" cull="" />
      </>
    );
  }
}

export default Blog;
