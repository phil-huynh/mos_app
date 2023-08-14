import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Nav({matches, handleSideBar}) {
  return (
    <div className="navbar">
      {matches ?
      <>
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
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/speaking">Speaking</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/press">Press</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/free">Free!</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">Admin</NavLink>
          </li>
        </ul>
          <ShoppingCartIcon sx={{
            color: "white",
            fontSize: "3.5rem",
            marginRight: "5%"
          }}/>
        </>
        :
        <>
          <MenuIcon sx={{
            color: "white",
            fontSize: "2.5rem",
            border: "white solid 2px",
            borderRadius: "10px",
            margin: "2rem"
          }} onClick={handleSideBar}/>
          <ShoppingCartIcon sx={{
            color: "white",
            fontSize: "3.5rem",
            marginRight: "5%"
          }}/>
        </>
      }
    </div>
  )
}


