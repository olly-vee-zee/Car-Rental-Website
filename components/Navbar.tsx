'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'nav-link active fw-bold' : 'nav-link'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-primary" href="/">
          <i className="fas fa-star me-2"></i>
          MyCompany
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
              <Link className={isActive('/')} href="/">
                <i className="fas fa-home me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/offers')} href="/offers">
                <i className="fas fa-tags me-1"></i>
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/fleet')} href="/fleet">
                <i className="fas fa-car me-1"></i>
                Fleet
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/reviews')} href="/reviews">
                <i className="fas fa-star me-1"></i>
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/help')} href="/help">
                <i className="fas fa-question-circle me-1"></i>
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contact')} href="/contact">
                <i className="fas fa-envelope me-1"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}