import "../styles/vans.css";
import { vans } from "../data/vans_data";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type?.toLowerCase() === typeFilter)
    : vans;
  console.log(typeFilter);
  let van_card = displayedVans.map((van) => {
    return (
      <div className='van_card' key={van.id}>
        <Link to={`${van.id}`}>
          <div className='img'>
            <img src={van.img} alt='van image' />
          </div>
          <div className='name_price'>
            <p>{van.name}</p>
            <p>{van.price}</p>
          </div>
          {van.type && <button className={van.type}>{van.type}</button>}
        </Link>
      </div>
    );
  });
  return (
    <div className='vans'>
      <div className='header'>
        <h2>Explore Our Van options</h2>
        <div className='filtering_btns'>
          <button
            className={`luxury_filter ${
              typeFilter == "luxury" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className={`exotic_filter ${
              typeFilter === "exotic" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "exotic" })}
          >
            Exotic
          </button>
          <button
            className={`leisure_filter ${
              typeFilter == "leisure" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "leisure" })}
          >
            Leisure
          </button>
          {typeFilter ? (
            <button
              className='clear_filter'
              onClick={() => setSearchParams({ type: "" })}
            >
              Clear Filters
            </button>
          ) : null}
        </div>
      </div>
      <div className='van_card_container'>{van_card}</div>
    </div>
  );
}

export default Vans;
