import { NavLink, useNavigate, useParams } from "react-router-dom";
import { vans } from "../data/vans_data";

function VanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const van = vans.find((van) => van.id == id);

  if (!van) {
    return <h1>Loading...</h1>;
  }

  const { type, img, name, price, description } = van;

  return (
    <div className='p-4 mx-12'>
      <NavLink
        onClick={goBack}
        to='..'
        relative='path'
        className='rtn_btn inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6'
      >
        &larr;
        <span className='ml-2'>
          Back to
          <i
            className={
              type
                ? `ml-1 ${type.toLowerCase().concat("_filter")} selected`
                : "ml-1"
            }
          >
            {type ? ` ${type} ` : " all "}
          </i>
          vans
        </span>
      </NavLink>
      <div className='mt-6 p-6 border rounded-lg shadow-lg max-w-lg'>
        <div className='img mb-4'>
          <img
            src={img}
            alt={name}
            className='w-full h-auto rounded-lg max-h-80 object-cover'
          />
        </div>
        {type && (
          <button
            className={`type_btn ${type.toLowerCase()} mb-4 py-1 px-3 rounded`}
          >
            {type}
          </button>
        )}
        <h2 className='text-2xl font-bold mb-2'>{name}</h2>
        <div className='text-xl text-gray-700 mb-4'>
          <b>${price}</b> / day
        </div>
        <p className='text-gray-600 mb-6'>{description}</p>
        <button className='rent_btn bg-blue-500 text-white py-2 px-4 rounded'>
          Rent this van
        </button>
      </div>
    </div>
  );
}

export default VanDetail;
