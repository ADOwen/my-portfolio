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
          <Link to='#'>
            About me
          </Link>
          <Link to='#'>
            Contact Me
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default NavBar;