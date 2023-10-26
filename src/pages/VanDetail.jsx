import { Link, useParams } from "react-router-dom";
import { vans } from "../data/vans_data";

function VanDetail() {
  const { id } = useParams();

  const vanDetail = vans.map((van) => {
    if (van.id == id) {
      return (
        <div className='van_card_detail' key={van.id}>
          <div className='img'>
            <img src={van.img} alt='' />
          </div>
          {van.type && (
            <button className={`type_btn ${van.type}`}>{van.type}</button>
          )}
          <b>{van.name}</b>
          <small
            style={{
              margin: "8px 0",
              display: "block",
            }}
          >
            <b>{van.price}</b>
          </small>
          <p>{van.description}</p>
          <button className='rent_btn'>rent this van</button>
        </div>
      );
    }
  });

  return (
    <div className='detail_container'>
      <Link to='..' relative='path' className='rtn_btn'>
        &larr;<span style={{ marginRight: "0" }}>back to all vans</span>{" "}
      </Link>
      {vanDetail ? vanDetail : <h1>Loading ... </h1>}
    </div>
  );
}

export default VanDetail;
