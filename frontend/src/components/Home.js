import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    return (
      <div className="homepage" style={{ textAlign: "center" }}>
        <h1>Home page</h1>
        <div className="navigation">
          <Link to="/visitor">
            <Button
              variant="primary"
              type="button"
              style={{ marginRight: "10px" }}
            >
              Visitor
            </Button>
          </Link>
          <Link to="/staff">
            <Button
              variant="primary"
              type="button"
              style={{ marginLeft: "10px" }}
            >
              Staff
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
