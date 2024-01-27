import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";

function NavBar() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#161616",
  };

  return (
    <nav className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <NavLink
          exact
          to='/'
          className='text-lg font-bold tracking-wider'
          activeStyle={activeStyle}
        >
          #vanlife
        </NavLink>
        <div className='flex items-center'>
          <NavLink
            to='/host'
            className='mr-6 hover:text-gray-300'
            activeStyle={activeStyle}
          >
            Host
          </NavLink>
          <NavLink
            to='/about'
            className='mr-6 hover:text-gray-300'
            activeStyle={activeStyle}
          >
            About
          </NavLink>
          <NavLink
            to='/vans'
            className='mr-6 hover:text-gray-300'
            activeStyle={activeStyle}
          >
            Vans
          </NavLink>
          <NavLink
            to='/login'
            className='flex items-center hover:text-gray-300'
            activeStyle={activeStyle}
          >
            <img
              className='w-8 h-8 rounded-full mr-2'
              src={avatar}
              alt='Avatar'
            />
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
