import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, } from "react-bootstrap";
import "./index.css";
import profile from "./resources/profile.jpg";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/pages/About.js";
import Blog from "./components/pages/Blog.js";
import Projects from "./components/pages/Projects.js";

function App() {
  return (
    <Container className="fill" fluid>
      <Router>
        <Row>
          <Col xs={3}>
            <div className="nav">
              <img className="pic" src={profile} alt="Me!" />
              <ul>
                <li>
                  <Link className="link-item" to="/">About</Link>
                </li>
                <li>
                  <Link className="link-item" to="/blog">Blog</Link>
                </li>
                <li>
                  <Link className="link-item" to="/academics">Academics</Link>
                </li>
                <li>
                  <Link className="link-item" to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="rest">
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
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
