import React, { Component } from 'react';
import {
  InputGroup, Button, FormControl
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Contact extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h2>Contact me</h2>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Firstname
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Lastname
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">E-mail</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <br />
        <Button
          variant="success"
          style={{ background: "#013220", marginLeft: "1040px" }}
        >
          Submit
        </Button>{" "}
      </div>
    );
  }
}

export default Contact;
