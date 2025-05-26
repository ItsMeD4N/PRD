import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">LOST & FOUND</div>

      <ul className="navbar-links">
        <li>
          <a href="#lihat-laporan">📄 Lihat Laporan</a>
        </li>
        <li>
          <a href="#buat-laporan">📝 Buat Laporan</a>
        </li>
        <li className="dropdown">
          <a href="#prosedur">📋 Prosedur</a>
        </li>
      </ul>

      <div className="controls">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
