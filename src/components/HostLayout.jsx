import { NavLink, Outlet } from "react-router-dom";
import "../styles/host.css";
export default function HostLayout() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#161616",
  };
  return (
    <div className='host_vans'>
      <nav className='dashboard_nav'>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='/host'
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='income'
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='vans'
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='reviews'
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
