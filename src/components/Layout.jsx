import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../assets/logo.png';

export default function Layout({ children }) {
  const location = useLocation();
  const isApplicationsPage = location.pathname === '/applications';

  return (
    <div className="layout">
      <NavBar />
      {!isApplicationsPage && (
        <div className="logo-container">
          <img src={logo} alt="Co-App Logo" className="page-logo" />
        </div>
      )}
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}
