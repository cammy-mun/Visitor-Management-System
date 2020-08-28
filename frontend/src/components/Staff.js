import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
// import axios from "axios";

class Staff extends Component {
  render() {
    return (
      <>
        <h1>Staff Page</h1>
        {["Select Ward", "Select Bed", "Select Room"].map((variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              3
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
            <Dropdown.Item eventKey="6">6</Dropdown.Item>
            <Dropdown.Item eventKey="7">7</Dropdown.Item>
            <Dropdown.Item eventKey="8">8</Dropdown.Item>
            <Dropdown.Item eventKey="9">9</Dropdown.Item>
            <Dropdown.Item eventKey="10">10</Dropdown.Item>
          </DropdownButton>
        ))}
      </>
    );
  }
}

export default Staff;
