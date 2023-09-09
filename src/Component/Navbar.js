import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navBar navbar-light bg-transparent">
      <div className='container-fluid d-flex flex-row'>
        <div className='container'>
          <Link className="navbar-brand text-white fw-bold navLink" style={{fontSize: "30px"}} to="/">Izhar Brands</Link>

          {/* Hamburger Menu Icon (for smaller screens) --> */}
          <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
        </div>

          {/* <!-- Navigation Links --> */}
          <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link text-white navLink" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white navLink" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white navLink" to="/post">Post</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white navLink" to="/contact">Contact</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className="nav-link text-white navLink" onClick={props.login}>
                      {props.status?"logout":"login"}
                    </Link>
                  </li>
              </ul>
          </div>
        </div>
    </nav>
  )
};

export default Navbar;
