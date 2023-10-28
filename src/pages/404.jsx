import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='not_found'>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to='/'>Return to Home</Link>
    </div>
  );
}

export default NotFound;
