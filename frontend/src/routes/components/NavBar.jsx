import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand'>Don Bosco</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className='nav-link active'
                  aria-current='page'
                />
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  Nosotros
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/services' className='nav-link'>
                  Servicios
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/register' className='nav-link'>
                  Registrar
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/admin' className='nav-link'>
                  Admin - Solo Pruebas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
