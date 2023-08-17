import { Link, Outlet } from 'react-router-dom'
import DarkVariantExample from '../components/DarkVariantExample'
import NavScrollExample from '../components/NavScrollExample'
import { AuthStatus } from './App'

export function Layout() {
  return (
    <div>
      <NavScrollExample />
      <DarkVariantExample />
      <AuthStatus />

      <ul>
        <li>
          <Link to='/'>Public Page</Link>
        </li>
        <li>
          <Link to='/chatbot'>Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
