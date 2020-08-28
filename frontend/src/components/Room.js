import React, { Component } from "react";
// import axios from "axios";

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: "",
      visitors: [],
    };
  }

  componentDidMount = () => {
    console.log("Retreieve data from API and database");
  };

  render() {
    const { wardNum, bedNum } = this.props;
    const { total, visitors } = this.state;
    return (
      <>
        <h4>Ward Number {wardNum}</h4>
        <h4>Bed Number {bedNum}</h4>
        <h4>Total number of visitors {total}</h4>
        <h4>Insert list of visitors here</h4>
      </>
    );
  }
}

export default Room;
