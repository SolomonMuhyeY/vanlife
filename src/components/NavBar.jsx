import { NavLink } from "react-router-dom";

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
    </nav>
  );
}

export default NavBar;
