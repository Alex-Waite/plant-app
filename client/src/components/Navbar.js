import React from "react"

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg alxNavStyle">
  <a className="navbar-brand navLogoStyle" href="/">Eleanor.</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><i class="fas fa-chevron-down togglerBtn"></i></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link navLinkStyle" href="/register">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navLinkStyle" href="/signin">Sign-In</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link navLinkStyle" href="/shop">View Plants</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar