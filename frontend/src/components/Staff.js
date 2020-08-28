import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Room from "./Room";

class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wardNum: "1",
      bedNum: "1",
    };
  }

  handleSelect = (evtKey, event) => {
    console.log("evtKey", evtKey);
    console.log("event", event);
    console.log("event target", event.target);
    console.log("event name", event.name);
    const arr = evtKey.split(" ");
    this.setState({
      [arr[0]]: arr[1],
    });
  };

  onChange = (event) => {
    console.log("event name onchange", event.target.name);
    console.log("event value onchange", event.target.value);
  };

  onClick = (event) => {
    // console.log("onclcl!");
    console.log("event onclick", event);
    console.log("event target onclick", event.target);
  };

  render() {
    const { wardNum, bedNum } = this.state;
    return (
      <>
        <h1>Staff Page</h1>
        {["Select Ward", "Select Bed"].map((variant) => (
          <Form>
            <Form.Label>{variant}</Form.Label>
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              // title={variant}
              title={variant === "Select Ward" ? wardNum : bedNum}
              onSelect={this.handleSelect}
            >
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 1"}
              >
                1
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 2"}
              >
                2
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 3"}
              >
                3
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 4"}
              >
                4
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 5"}
              >
                5
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 6"}
              >
                6
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 7"}
              >
                7
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 8"}
              >
                8
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 9"}
              >
                9
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={variant.split(" ")[1].toLowerCase() + "Num 10"}
              >
                10
              </Dropdown.Item>
            </DropdownButton>
          </Form>
        ))}

        <hr />
        <Room wardNum={wardNum} bedNum={bedNum} />
      </>
    );
  }
}

export default Staff;
