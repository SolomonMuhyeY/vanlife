/* eslint-disable no-unused-vars */
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { vans } from "../../data/vans_data";
import { useState } from "react";
function HostVansDetail() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "red",
    boxShadow: "0 0 12px #333",
  };

  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const hostVansEl = vans.map(
    (van) =>
      id == van.id && (
        <div key={van.id} className='host_vans_detail_card'>
          <div className='img_type_name_price_cont'>
            <div className='img'>
              <img src={van.img} alt='' />
            </div>
            <div>
              {van.type ? (
                <button className={`type_btn ${van.type}`}>{van.type}</button>
              ) : (
                ""
              )}
              <p>
                <b>{van.name}</b>
              </p>
              <b>{van.price}</b>
            </div>
          </div>
          <nav className='detail_price_photo'>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}`}
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/pricing`}
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/photos`}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      )
  );
  return (
    <div
      style={{
        padding: "0 1rem",
        paddingBottom: "2rem",
        width: "fit-content",
      }}
    >
      <Link to='..' relative='path' className='rtn_btn'>
        &larr;<span>back to all vans</span>
      </Link>
      {hostVansEl}
    </div>
  );
}

export default HostVansDetail;
