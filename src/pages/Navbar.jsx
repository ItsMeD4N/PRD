import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOST & FOUND</div>
      <ul className="navbar-links">
        <li>
          <a href="#lihat-laporan">Lihat Laporan</a>
        </li>
        <li>
          <a href="#buat-laporan">Buat Laporan</a>
        </li>
        <li>
          <a href="#prosedur">Prosedur</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
