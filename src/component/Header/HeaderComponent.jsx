import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
function HeaderComponent() {
  return (
    <React.Fragment>
      <header className="sticky-top mb-3 bg-white border-bottom shadow-sm">
        <nav className="site-header py-3">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <h1>
              <NavLink exact to="/">
                My Shop
              </NavLink>
            </h1>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default HeaderComponent;
