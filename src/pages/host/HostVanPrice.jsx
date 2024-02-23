import { useOutletContext } from "react-router-dom";

function HostVanPrice() {
  const { van } = useOutletContext();
  return <h3>{van.price}</h3>;
}

export default HostVanPrice;
