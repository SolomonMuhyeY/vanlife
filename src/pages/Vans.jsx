import "../styles/vans.css";
import { vans } from "../data/vans_data";
import { Link } from "react-router-dom";

function Vans() {
  let van_card = vans.map((van) => {
    return (
      <div className='van_card' key={van.id}>
        <Link to={`/vans/${van.id}`}>
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
        <nav>
          <ul>
            <li>Modern</li>
            <li>Classic</li>
            <li>Normal</li>
            <li>Other News</li>
          </ul>
        </nav>
      </div>
      <div className='van_card_container'>{van_card}</div>
    </div>
  );
}

export default Vans;
