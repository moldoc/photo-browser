import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <section className="jumbotron text-center nav-container">
    <nav className="navbar navbar-light nav-title">
      <span className="navbar-brand mb-0 h1">Photo Browser</span>
    </nav>
    <p className="text-muted nav-description">
      Browse photos and albums, click a photo to see it in full size and to share its url.
    </p>
    <nav className="nav nav-pills nav-fill">
      <NavLink className="nav-item nav-link" to="/albums">Albums</NavLink>
      <NavLink className="nav-item nav-link" to="/photos">Photos</NavLink>
      <a className="nav-item nav-link" href="#">Users</a>
    </nav>
  </section>
);

export default NavBar;
