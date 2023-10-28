import { NavLink, useNavigate, useParams } from "react-router-dom";
import { vans } from "../data/vans_data";

function VanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  let type = ""; //trying to avoid the global variable
  const vanDetail = vans.map((van) => {
    if (van.id == id) {
      type = van.type;
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
      <NavLink
        onClick={() => goBack()}
        to='..'
        relative='path'
        className='rtn_btn'
      >
        &larr;
        <span style={{ marginRight: "0" }}>
          back to{" "}
          <i
            style={{ padding: "0 4px" }}
            className={
              type ? `${type.toLowerCase().concat("_filter")} selected` : ""
            }
          >
            {type ? type : "all"}
          </i>{" "}
          vans
        </span>{" "}
      </NavLink>
      {vanDetail ? vanDetail : <h1>Loading ... </h1>}
    </div>
  );
}

export default VanDetail;
