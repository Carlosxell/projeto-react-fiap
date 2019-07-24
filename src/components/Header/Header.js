import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header_content d-flex justify-content-between align-items-center">
        <span className="d-inline-block header_logo">Health Track</span>
      </div>
    </header>
  );
}

export default Header;
