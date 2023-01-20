import { Outlet, Link } from 'react-router-dom';

import './navbar.styles.scss'

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-links">
          <div className='nav-items'>
            <Link to='/'>
              Home
            </Link>
          </div>
          <div className="nav-items">
            <Link to='/projects'>
              Projects
            </Link>
          </div>
          <div className="nav-items">
            <a href = "mailto: adowen88@gmail.com">
              Contact
            </a>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default NavBar;