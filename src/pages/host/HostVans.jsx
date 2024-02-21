import { Link } from "react-router-dom";
import { vans } from "../../data/vans_data";

function Vans() {
  const hostVan = vans.map((van) => (
    <div
      key={van.id}
      className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105'
    >
      <Link to={`${van.id}`} className='block'>
        <div className='aspect-w-16 aspect-h-9'>
          <img
            src={van.img}
            alt={van.name}
            className='object-cover w-full h-full transition-transform duration-300 transform hover:scale-110'
          />
        </div>
        <div className='p-4 flex justify-between items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'>
          <b className='text-lg font-semibold'>{van.name}</b>
          <b className='text-lg font-semibold'>${van.price}</b>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-12'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>
          Discover Your Perfect Van
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {hostVan}
        </div>
      </div>
    </div>
  );
}

export const HostVans = Vans;
