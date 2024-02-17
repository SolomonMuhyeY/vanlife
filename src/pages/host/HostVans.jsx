import { Link } from "react-router-dom";
import { vans } from "../../data/vans_data";

function Vans() {
  const hostVan = vans.map((van) => (
    <div
      key={van.id}
      className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      <Link to={`${van.id}`} className='block'>
        <div className='aspect-w-16 aspect-h-9'>
          <img
            src={van.img}
            alt={van.name}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='p-4 flex justify-between items-center'>
          <b className='text-lg font-semibold text-gray-800'>{van.name}</b>
          <b className='text-lg font-semibold text-gray-800'>${van.price}</b>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Our Vans</h2>
      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {hostVan}
      </div>
    </div>
  );
}

export const HostVans = Vans;
