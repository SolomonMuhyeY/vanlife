import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";
function NavBar() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#f8f6f6",
  };
  return (
    <nav className='relative bg-gray-800 text-white py-4 px-6 flex gap-12 justify-end items-center shadow-lg'>
      <NavLink
        className='absolute left-1 text-base hover:text-gray-300 transition duration-300'
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/'
      >
        #vanlife
      </NavLink>
      <NavLink
        className='text-base hover:text-gray-300 transition duration-300'
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/host'
      >
        Host
      </NavLink>
      <NavLink
        className='text-base hover:text-gray-300 transition duration-300'
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        className='text-base hover:text-gray-300 transition duration-300'
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/vans'
      >
        Vans
      </NavLink>
      <NavLink
        className='text-base hover:text-gray-300 transition duration-300'
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to='/login'
      >
        <img className='avatar_icon' src={avatar} alt='' />
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;
