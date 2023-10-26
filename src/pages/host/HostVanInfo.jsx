import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { van } = useOutletContext();
  return (
    <div className='current_van_detail'>
      <h3>Name: {van.name}</h3>
      {van.type && <h3> Category : {van.type} </h3>}
      <p>{van.description}</p>
    </div>
  );
}

export default HostVanInfo;
