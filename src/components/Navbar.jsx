import { FaReact } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper-navbar'>
        <div className='logo'>
          <NavLink to='/'>
            <FaReact className='react-logo' /> React Jobs
          </NavLink>
        </div>
        <div className='menu'>
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
