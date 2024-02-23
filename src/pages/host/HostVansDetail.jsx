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
          className='p-4 border rounded-lg shadow-lg my-4 bg-white'
        >
          <div className='flex'>
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
                  className={`type_btn ${van.type} py-1 px-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900`}
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
              className='text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md border border-gray-300 hover:border-gray-500 transition duration-300'
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/pricing`}
              className='text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md border border-gray-300 hover:border-gray-500 transition duration-300'
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to={`/host/vans/${van.id}/photos`}
              className='text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md border border-gray-300 hover:border-gray-500 transition duration-300'
            >
              Photos
            </NavLink>
          </nav>
          <div className='text-left'>
            <Outlet context={{ van }} />
          </div>
        </div>
      )
  );

  return (
    <div className='container mb-20 mt-8'>
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
