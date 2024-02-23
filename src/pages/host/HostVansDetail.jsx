import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { vans } from "../../data/vans_data";

function HostVansDetail() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "red",
    boxShadow: "0 0 12px #333",
  };

  const { id } = useParams();
  const hostVansEl = vans.map(
    (van) =>
      id == van.id && (
        <div
          key={van.id}
          className='host_vans_detail_card p-4 border rounded-lg shadow-lg bg-white my-4'
        >
          <div className='img_type_name_price_cont flex items-center'>
            <div className='img w-32 h-32 overflow-hidden rounded-full border-2 border-gray-300'>
              <img
                src={van.img}
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
            <div className='ml-4'>
              {van.type ? (
                <button
                  className={`type_btn ${van.type} py-1 px-3 bg-blue-500 text-white rounded-lg`}
                >
                  {van.type}
                </button>
              ) : (
                ""
              )}
              <p className='mt-2 text-lg font-semibold'>
                <b>{van.name}</b>
              </p>
              <b className='text-xl text-green-600'>${van.price}/day</b>
            </div>
          </div>
          <nav className='detail_price_photo mt-4 flex space-x-4'>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}`}
              end
              className='text-gray-700 hover:text-gray-900'
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/pricing`}
              className='text-gray-700 hover:text-gray-900'
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/photos`}
              className='text-gray-700 hover:text-gray-900'
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      )
  );
  return (
    <div className='container mb-20 mt-8 '>
      <Link
        to='..'
        relative='path'
        className='rtn_btn text-blue-500 hover:underline flex items-center'
      >
        &larr;<span className='ml-2'>Back to all vans</span>
      </Link>
      {hostVansEl}
    </div>
  );
}

export default HostVansDetail;
