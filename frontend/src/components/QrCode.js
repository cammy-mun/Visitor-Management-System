import React, { Component } from "react";
const qrcode = require("./qrcode.jpg");

class QrCode extends Component {
  render() {
    return (
      <div className="qrcodepage">
        <h1>QR Code</h1>
        <img alt="" src={qrcode} />
      </div>
    );
  }
}

export default QrCode;
