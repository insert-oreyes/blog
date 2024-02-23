import { Link } from 'react-router-dom'

/**
 * Renders the header component.
 * Links to the login and register pages.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  return (
    <header>
      <Link to='/' className='logo'>
        My blog
      </Link>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
    </header>
  )
}
