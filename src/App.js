import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Content, Navigation } from "react-mdl";
import Main from "./components/main";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                 to="/login"
              >
                Login
              </Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
            <Projects />
            <Contact />
            <Footer />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
