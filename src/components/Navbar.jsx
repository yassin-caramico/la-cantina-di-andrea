import React from "react";
import "./Navbar.css"; // Importa il file CSS per la navbar
import Search from "./searchbar"; // Importa il componente Search

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        {/* Inserimento del logo */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvrxC-to-hKw-eX8viK5igaJl8yLFe25Ijg&s"
          alt="Logo"
          className="logo-img"
        />

        <h1>LA CANTINA DI ANDREA</h1>
      </div>
      <div className="links">
        {/* Link per Home, Services, Contact */}
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <Search className="search-box" />
      </div>
    </nav>
  );
};

export default Navbar;
