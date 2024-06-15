import { FaReact } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function showMenuHandler() {
    setShowMenu((prev) => {
      return !prev
    })
  }

  return (
    <div className='navbar'>
      <div className='wrapper-navbar'>
        <div className='logo'>
          <NavLink to='/'>
            <FaReact className='react-logo' /> React Jobs
          </NavLink>
        </div>
        <div className='menu-icon' onClick={showMenuHandler}>
          {showMenu ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <div className={showMenu ? 'menu show-menu' : 'menu hide-menu'}>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/jobs'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/add-job'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Add Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
