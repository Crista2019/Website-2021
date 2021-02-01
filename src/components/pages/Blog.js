import React, { Component } from "react";
import "../../App.css";
import "./Blog.css";
import IndBlog from "../modules/IndBlog.js";
import MouseParticles from "react-mouse-particles";

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const blogs = [{ id: 0, title: "First Blog Post", date: "2/1/2021", content: ["This is my first blog post yay.", "I hope it looks aliright."] }];

    return (
      <>
        <IndBlog blogs={blogs}></IndBlog>
        {/* <MouseParticles g={1} color="gray" cull="nav blog-container" /> */}
      </>
    );
  }
}

export default Blog;
