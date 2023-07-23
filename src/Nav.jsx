import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/offerings">Offerings</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/speaking">Speaking</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/press">Press</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/affiliates">Affiliates</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/free">Free!</NavLink>
        </li>
      </ul>
    </div>
  )
}


