import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.1.0
          </div>
          <strong>
            Copyright &copy; 2021-2024{" "}
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </div>
    );
  }
}
