import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#FFA500'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/api/placeholder/50/50" alt="MTS Logo" width="50" height="50" className="d-inline-block align-text-top" style={{backgroundColor: 'white', padding: '5px'}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
        <button type="button" class="btn btn-primary">Login</button>
        <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>

    </>

  )
}
