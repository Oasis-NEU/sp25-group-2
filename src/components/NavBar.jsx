export default function NavBar() {
  return (
    <nav className="horizontal-navbar">
      <ul className="navbar-titles">
        <li className="navbar-page">
          <a href="#YourAccount" className="navbar-page">Your Account</a>
        </li>
        <li className="navbar-titles dropdown">
          <a href="#SignOut" className="navbar-page">Sign Out</a>
          <a href="#Profile" className="navbar-page">Your Profile</a>
        </li>
        <li className="navbar-titles dropdown">
          <div 
            className="navbar-page dropdown-toggle" 
            onClick={toggleApplicationsDropdown}
          >
            Your Applications
          </div>
          {showApplicationsDropdown && (
            <div className="dropdown-menu">
              <Link to="/applications" className="dropdown-titles">View Applications</Link>
              <Link to="/add-application" className="dropdown-titles">Add Application</Link>
            </div>
          )}
        </li>

        <li className="navbar-titles">
          <a href="#InterviewTips" className="navbar-page">Interview Tips</a>
        </li>
        <li className="navbar-titles">
          <a href="#Resources" className="navbar-page">Resources</a>
        </li>
      </ul>
    </nav>
  )
}

