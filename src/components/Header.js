import React from 'react';
// import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* <Navbar full screen */}
      <nav id="desktop-nav">
        <div className="logo">Gkmeena</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Nav Bar half screen */}
      <nav id="hamburger-nav">
        <div className="logo">Gkmeena</div>
        <div className="hamburger-menu">

          {/* Java Script for Hamburger Icon toggle */}
          <div className="hamburger-icon" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navbar Links show through Hamburgerr */}
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={handleMenuToggle}>About</a></li>
            <li><a href="#skills" onClick={handleMenuToggle}>Skills</a></li>
            <li><a href="#projects" onClick={handleMenuToggle}>Projects</a></li>
            <li><a href="#contact" onClick={handleMenuToggle}>Contact</a></li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;