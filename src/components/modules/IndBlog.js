import React, { Component } from "react";
import "../../App.css";
import "./IndBlog.css";
import { Modal, Button } from "react-bootstrap";

class IndBlog extends Component {
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
      <>
        <div class="blogs-container">
          {this.props.blogs.map((blog) => (
            <div class="single-blog" key={blog.id}>
              <p onClick={this.toggleModal}>{blog.title}</p>{" "}
              <h5>{blog.date}</h5>
              <Modal
                size="lg"
                show={this.state.showModal}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    <div className="blog-header">
                      <p className="blog-title">
                        <strong>{blog.title}</strong>
                      </p>
                      <p className="blog-date">{blog.date}</p>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="blog-body blog-content">
                    {blog.content.map((paragraph) => (
                      <>
                        <p>{paragraph}</p>
                      </>
                    ))}
                    <hr></hr>
                  </div>
                  <button className="minimize" onClick={this.toggleModal}>
                    Done!
                  </button>{" "}
                </Modal.Body>
              </Modal>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default IndBlog;
