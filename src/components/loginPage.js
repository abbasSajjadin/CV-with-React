import React, { Component } from "react";
import Login from "./login";

class LoginPage extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <Row>
            <Col xs="6">
              <Button
                color="primary"
                className="px-4"
                onClick={this.routeChange}
              >
                Login
              </Button>
            </Col>
            <Col xs="6" className="text-right">
              <Button color="link" className="px-0">
                Forgot password?
              </Button>
            </Col>
          </Row>
          ...
        </Container>
      </div>
    );
  }
}

export default LoginPage;
