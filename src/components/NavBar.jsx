import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";
function NavBar() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#161616",
  };
  return (
    <nav className='nav'>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to='/'>
        #vanlife
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/host'
      >
        Host
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/vans'
      >
        Vans
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/login'
      >
        <img className='avatar_icon' src={avatar} alt='' />
      </NavLink>
    </nav>
  );
}

export default NavBar;
