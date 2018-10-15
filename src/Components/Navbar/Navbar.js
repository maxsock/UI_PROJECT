import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends React.Component {
  render() {
    return (
        <nav id="navigation" class="navbar navbar-expand-lg navbar-light bg-dark">
          <Link class="navbar-brand" to="/" id="title">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
              THE WEBSITE
          </Link>
          <div  class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/attractions">Attractions <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/batiments">Bâtiments</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/personnel">Personnel</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/maintenance">Maintenance</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/visiteurs">Visiteurs</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}
