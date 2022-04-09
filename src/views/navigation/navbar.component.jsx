import { Outlet, Link } from 'react-router-dom';

import './navbar.styles.scss'

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-links">
          <Link to='/'>
            Home
          </Link>
          <Link to='/projects'>
            Projects
          </Link>
          <a href = "mailto: adowen88@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default NavBar;