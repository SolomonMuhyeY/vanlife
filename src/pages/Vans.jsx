import { Link, useSearchParams } from "react-router-dom";
import { vans } from "../data/vans_data";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type?.toLowerCase() === typeFilter)
    : vans;

  const vanCards = displayedVans.map((van) => (
    <div
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'
      key={van.id}
    >
      <Link to={`${van.id}`} className='block relative group overflow-hidden'>
        <img
          src={van.img}
          alt='van image'
          className='w-full h-auto object-cover'
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white group-hover:bg-opacity-0 transition-opacity duration-300'>
          <p className='text-lg font-semibold group-hover:text-white'>
            {van.name}
          </p>
          <p className='text-sm group-hover:text-white'>{van.price}</p>
          {van.type && (
            <button
              className={`mt-2 px-3 py-1 bg-${van.type.toLowerCase()}-500 text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300`}
            >
              {van.type}
            </button>
          )}
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto py-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-semibold'>Explore Our Van Options</h2>
        </div>
        <div className='flex flex-wrap mb-8'>
          <button
            className={`mr-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded ${
              typeFilter === "luxury" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className={`mr-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded ${
              typeFilter === "exotic" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSearchParams({ type: "exotic" })}
          >
            Exotic
          </button>
          <button
            className={`mr-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded ${
              typeFilter === "leisure" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSearchParams({ type: "leisure" })}
          >
            Leisure
          </button>
          {typeFilter && (
            <button
              className='mr-4 mb-4 px-4 py-2 bg-gray-500 text-white rounded'
              onClick={() => setSearchParams({ type: "" })}
            >
              Clear Filters
            </button>
          )}
        </div>
        <div className='flex flex-wrap -mx-4'>{vanCards}</div>
      </div>
    </div>
  );
}

export default Vans;
