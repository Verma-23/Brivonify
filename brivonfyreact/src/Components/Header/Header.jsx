import React from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['News', 'Articles', 'HR', 'Cross Functions', 'Entities'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>ConnectHub</h1>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
