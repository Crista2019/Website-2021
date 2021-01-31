import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import "./index.css";
import profile from "./resources/profile.jpg";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/pages/About.js";
import Blog from "./components/pages/Blog.js";
import Projects from "./components/pages/Projects.js";
import Header from "./components/pages/Header.js";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itHeader: "Welcome :)",
      regHeader: "Use the links in the rose colored tab to start exploring!",
      currentPage: "",
    };
  }

  setAbout = () => {
    this.setState({
      itHeader: "Hi!",
      regHeader: "My name is Crista.",
      currentPage: "About",
    });
  };

  setBlog = () => {
    this.setState({
      itHeader: "Blog",
      regHeader: "",
      currentPage: "Blog",
    });
  };

  setAcademics = () => {
    this.setState({
      itHeader: "Academics",
      regHeader: "",
      currentPage: "Academics",
    });
  };

  setProjects = () => {
    this.setState({
      itHeader: "Projects",
      regHeader: "",
      currentPage: "Projects",
    });
  };

  render() {
    return (
      <Container className="fill" fluid>
        <Router>
          <Row>
            <Col xs lg="3">
              <div className="nav">
                <img className="pic" src={profile} alt="Me!" />
                <ul>
                  <li>
                    <Link onClick={this.setAbout} className="link-item" to="/">
                      {this.state.currentPage == "About" ? (
                        <strong>About</strong>
                      ) : (
                        "About"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={this.setBlog}
                      className="link-item"
                      to="/blog"
                    >
                      {this.state.currentPage == "Blog" ? (
                        <strong>Blog</strong>
                      ) : (
                        "Blog"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={this.setAcademics}
                      className="link-item"
                      to="/academics"
                    >
                      {this.state.currentPage == "Academics" ? (
                        <strong>Academics</strong>
                      ) : (
                        "Academics"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={this.setProjects}
                      className="link-item"
                      to="/projects"
                    >
                      {this.state.currentPage == "Projects" ? (
                        <strong>Projects</strong>
                      ) : (
                        "Projects"
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="rest">
              <Row className="header">
                <h1>
                  <i>{this.state.itHeader}</i>
                </h1>
                <h1>{this.state.regHeader}</h1>
                <hr></hr>
              </Row>
              <Row>
                <Switch>
                  <Route exact path="/">
                    <About></About>
                  </Route>
                  <Route path="/blog">
                    <Blog></Blog>
                  </Route>
                  <Route path="/projects">
                    <Projects></Projects>
                  </Route>
                </Switch>
              </Row>
            </Col>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default App;
