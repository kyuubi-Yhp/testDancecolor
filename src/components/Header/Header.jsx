import { Logo } from "../Logo/Logo"
import { NavList } from "../NavList/NavList"

import './Header.css'

export const Header = () => {
  return (
    <div className="box__header-menu">
      <Logo />
      <NavList />
    </div>
  )
}