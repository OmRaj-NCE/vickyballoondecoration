// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Vicky Balloon Decoration"
        description="Oops! The page you're looking for doesn't exist. Please visit our homepage."
      />
      <div className="not-found">
        <div className="container">
          <div className="not-found-content">
            <span className="not-found-emoji">🎈</span>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Looks like this balloon flew away! Let's get you back to celebrations.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;