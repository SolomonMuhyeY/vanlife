import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div className='flex justify-center mt-8'>
      <div className='w-full max-w-md'>
        <img
          src={van.img}
          alt={van.name}
          className='w-full h-auto rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
}

export default HostVanPhotos;
