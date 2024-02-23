import Header from './Header'
import { Outlet } from 'react-router-dom'

/**
 * Header renders at the top of the page.
 * Outlet renders the nested routes.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}
