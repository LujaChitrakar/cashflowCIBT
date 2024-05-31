import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import Dashboard from "./Dashboard";

class Layout extends Component {
  componentDidMount() {
    // Initialize AdminLTE
    this.adminlteScript = document.createElement("script");
    this.adminlteScript.src = "/node_modules/admin-lte/dist/js/adminlte.min.js";
    this.adminlteScript.async = true;
    document.body.appendChild(this.adminlteScript);
  }

  componentWillUnmount() {
    if (this.adminlteScript) {
      document.body.removeChild(this.adminlteScript);
    }
  }

  render() {
    return (
      <div className="wrapper">
        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper */}
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">{this.props.children}</div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Layout;
