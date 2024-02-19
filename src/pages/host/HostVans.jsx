import { Link } from "react-router-dom";
import { vans } from "../../data/vans_data";

function Vans() {
  const hostVan = vans.map((van) => (
    <div
      key={van.id}
      className='rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105'
    >
      <Link to={`${van.id}`} className='block'>
        <div className='aspect-w-16 aspect-h-9'>
          <img
            src={van.img}
            alt={van.name}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='p-4 flex justify-between items-center bg-gray-50'>
          <b className='text-lg font-semibold text-gray-900'>{van.name}</b>
          <b className='text-lg font-semibold text-indigo-600'>${van.price}</b>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-gray-800'>
          Our Vans
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {hostVan}
        </div>
      </div>
    </div>
  );
}

export const HostVans = Vans;
