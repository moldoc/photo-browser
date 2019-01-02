import React from 'react';

const NavBar = () => (
  <section className="jumbotron text-center nav-container">
    <nav
      className="navbar navbar-light nav-top"
    >
      <span className="navbar-brand mb-0 h1">Photo Browser</span>
      <p className="text-muted"> Browse photos and albums added by the users of this application.
        Click a photo to see it in full size and to share its url.</p>
    </nav>
    <nav className="nav nav-pills nav-fill">
      <a className="nav-item nav-link" href="#">Albums</a>
      <a className="nav-item nav-link active" href="#">Photos</a>
      <a className="nav-item nav-link" href="#">Users</a>
    </nav>
  </section>
);

export default NavBar;
