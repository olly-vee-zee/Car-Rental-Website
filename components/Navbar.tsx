// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          YourBusiness
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/offers" className={`nav-link ${isActive('/offers')}`}>
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/fleet" className={`nav-link ${isActive('/fleet')}`}>
                Fleet
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/reviews" className={`nav-link ${isActive('/reviews')}`}>
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/help" className={`nav-link ${isActive('/help')}`}>
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;