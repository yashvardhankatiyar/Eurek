import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // Import useNavigate hook

  const logout = () => {
    localStorage.removeItem('users'); // Corrected the usage of localStorage.clear to removeItem
    navigate("/login"); // Navigate to the login page
  }

  // Retrieve user from localStorage if needed
  const user = JSON.parse(localStorage.getItem('users'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Your Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            {user && (
              <li className="nav-item" onClick={logout}>Logout</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
