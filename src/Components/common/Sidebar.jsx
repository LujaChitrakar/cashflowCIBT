// src/common/Sidebar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  items = ["Banks", "Your Bank Account", "Wallets", "Cheques", "Transfers"];

  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="/" className="brand-link">
            <span className="brand-text font-weight-light">CASHFLOW</span>
          </a>
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {this.items.map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-building-columns"></i>
                      <p>{item}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}
