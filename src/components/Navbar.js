import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Navbar = () => {
  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Title>FindFun</Title>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to={'/'} className="navbar-item">
            Home
          </Link>

          <a className="navbar-item" href="https://adalab.es">
            Favs
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


document.addEventListener('DOMContentLoaded', () => {

  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});