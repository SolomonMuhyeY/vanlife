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
    <div className='detail_container p-4'>
      <NavLink onClick={goBack} to='..' relative='path' className='rtn_btn'>
        &larr;
        <span>
          back to
          <i
            className={
              type ? `${type.toLowerCase().concat("_filter")} selected` : ""
            }
          >
            {type ? type : "all"}
          </i>
          vans
        </span>
      </NavLink>
      <div className='van_card_detail mt-6 p-6 border rounded-lg shadow-lg'>
        <div className='img mb-4'>
          <img src={img} alt={name} className='w-full h-auto rounded-lg' />
        </div>
        {type && (
          <button className={`type_btn ${type.toLowerCase()} mb-4`}>
            {type}
          </button>
        )}
        <h2 className='text-2xl font-bold mb-2'>{name}</h2>
        <div className='text-xl text-gray-700 mb-4'>
          <b>{price}</b>
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
