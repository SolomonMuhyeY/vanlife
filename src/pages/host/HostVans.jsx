import { Link } from "react-router-dom";
import { vans } from "../../data/vans_data";

function Vans() {
  const hostVan = vans.map((van) => (
    <div
      key={van.id}
      className='rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105'
    >
      <Link to={`${van.id}`} className='block'>
        <div className='flex flex-col justify-between gap-5'>
          <div className='aspect-video h-44'>
            <img
              src={van.img}
              alt={van.name}
              className='object-cover w-full h-full transition-transform duration-300 transform'
            />
          </div>
          <div className='p-4 flex'>
            <b className='font-semibold'>{van.name}</b>
            <b className='font-semibold'>${van.price}</b>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='py-12'>
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
