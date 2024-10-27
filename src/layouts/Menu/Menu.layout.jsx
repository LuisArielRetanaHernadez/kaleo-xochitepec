import { Link, Outlet } from "react-router-dom"

import "./menu.layout.css"
import Header from "../../components/Header/Header"

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__content-nav">
        <nav className="menu__nav">
          <h2 className="logo menu__logo">Kaleo</h2>
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/home" className="link menu__link">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/group" className="link menu__link">Grupos</Link>
            </li>
            <li className="menu__item">
              <Link to="/event" className="link menu__link">Events</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Menu