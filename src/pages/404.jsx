import { Link } from "react-router-dom";
import "../styles/styles.css"; // Import your CSS file

function NotFound() {
  return (
    <div className='not_found_container'>
      <div className='not_found_content'>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to='/' className='return_home_link'>
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
