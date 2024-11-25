// src/components/Header.js
import React from "react";
import line from "../assets/3line.png";
import logo from "../assets/logo.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="container-fluid p-3 bg-light shadow">
      <div className="row align-items-center">
        {/* Menu Icon to toggle the sidebar */}
        <div className="col-6 d-flex align-items-center">
          <img
            src={line}
            alt="Menu Icon"
            className="me-3"
            style={{ width: "30px", cursor: "pointer" }}
            onClick={toggleSidebar} // Trigger the toggle when clicked
          />
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", minWidth: "80px" }}
          />
        </div>
        <div className="col-6 text-end">
          <i className="fa-solid fa-magnifying-glass me-3"  style={{ fontSize: "1.5rem", marginRight: "10px" }}></i>
          <i className="fa-solid fa-table-cells-large me-3"  style={{ fontSize: "1.5rem", marginRight: "10px" }}></i>
          <i
            className="fa-regular fa-sun"
            style={{ fontSize: "1.5rem", marginRight: "10px" }} // Larger and margin from the right
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
