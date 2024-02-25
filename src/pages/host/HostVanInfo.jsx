import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { van } = useOutletContext();
  return (
    <div className='py-8 px-6 bg-white rounded-lg shadow-lg max-w-2xl'>
      <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
        Name: <span className='text-gray-600'>{van.name}</span>
      </h3>
      {van.type && (
        <h3 className='text-xl font-medium text-gray-800 mb-4'>
          Category: <span className='text-gray-600'>{van.type}</span>
        </h3>
      )}
      <p className='text-gray-700 leading-relaxed'>{van.description}</p>
    </div>
  );
}

export default HostVanInfo;
