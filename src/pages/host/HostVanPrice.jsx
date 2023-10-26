import { useOutletContext } from "react-router-dom";

function HostVanPrice() {
  const { van } = useOutletContext();
  return <h3 style={{ margin: "1rem 0", textAlign: "center" }}>{van.price}</h3>;
}

export default HostVanPrice;
