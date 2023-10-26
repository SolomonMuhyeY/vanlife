import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div style={{ margin: "2rem auto" }} className='img'>
      <img src={van.img} alt='' />
    </div>
  );
}

export default HostVanPhotos;
