import { Link } from "react-router-dom";
import { vans } from "../../data/vans_data";
function Vans() {
  const hostVan = vans.map((van) => (
    <div key={van.id} className='host_van_card'>
      <Link to={`${van.id}`}>
        <div className='img'>
          <img src={van.img} alt='' />
        </div>
        <div className='host_van_price_name'>
          <b>{van.name}</b>
          <b>{van.price}</b>
        </div>
      </Link>
    </div>
  ));
  return <div className='host_van_container'>{hostVan}</div>;
}

export const HostVans = Vans;
