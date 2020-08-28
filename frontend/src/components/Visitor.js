import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Visitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nric: "",
      phoneNum: "",
      patientName: "",
      wardNum: "",
      bedNum: "",
    };
  }

  onSubmit = (event) => {
    const { name, nric, phoneNum, patientName, wardNum, bedNum } = this.state;

    axios
      .post("http://localhost:8000/api/visitors/", {
        name: name,
        nric: nric,
        phoneNum: phoneNum,
        patientName: patientName,
        wardNum: wardNum,
        bedNum: bedNum,
      })
      .then(() => this.props.history.push("/qrcode"));

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, nric, phoneNum, patientName, wardNum, bedNum } = this.state;
    return (
      <div
        className="visitorpage"
        style={{ marginRight: "100px", marginLeft: "100px" }}
      >
        <h1>Visitor Page</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              type="text"
              placeholder="Enter full name"
              onChange={this.onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="nric">
            <Form.Label>NRIC</Form.Label>
            <Form.Control
              name="nric"
              value={nric}
              type="text"
              placeholder="Enter NRIC"
              onChange={this.onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneNum">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNum"
              value={phoneNum}
              type="text"
              placeholder="Enter phone number"
              onChange={this.onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="patientName">
            <Form.Label>Patient name</Form.Label>
            <Form.Control
              name="patientName"
              value={patientName}
              type="text"
              placeholder="Enter patient name"
              onChange={this.onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="wardNum">
            <Form.Label>Ward number</Form.Label>
            <Form.Control
              name="wardNum"
              value={wardNum}
              type="text"
              placeholder="Enter ward number"
              onChange={this.onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="bedNum">
            <Form.Label>Bed number</Form.Label>
            <Form.Control
              name="bedNum"
              value={bedNum}
              type="text"
              placeholder="Enter bed number"
              onChange={this.onChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Visitor;
