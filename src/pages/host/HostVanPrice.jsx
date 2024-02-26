import { useOutletContext } from "react-router-dom";

function HostVanPrice() {
  const { van } = useOutletContext();
  return (
    <div className='mt-8 px-4 text-center'>
      <h2 className='text-xl font-medium mb-2'>Price per Day</h2>
      <h3 className='text-3xl font-semibold text-green-600'>${van.price}</h3>
    </div>
  );
}

export default HostVanPrice;
