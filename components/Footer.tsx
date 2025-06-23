import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-primary">
              <i className="fas fa-star me-2"></i>
              MyCompany
            </h5>
            <p className="mb-3">
              Professional services with excellent customer support. We're committed to 
              providing the best experience for our clients with reliable and innovative solutions.
            </p>
            <div className="d-flex">
              <a href="#" className="text-light me-3 fs-5">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/offers" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Offers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/fleet" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Fleet
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/help" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/reviews" className="text-light text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact Info</h6>
            <div className="mb-2">
              <i className="fas fa-envelope me-3"></i>
              <span>info@mycompany.com</span>
            </div>
            <div className="mb-2">
              <i className="fas fa-phone me-3"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="mb-2">
              <i className="fas fa-map-marker-alt me-3"></i>
              <span>123 Business St, City, State 12345</span>
            </div>
            <div className="mt-3">
              <small className="text-muted">
                <i className="fas fa-clock me-2"></i>
                24/7 Customer Support Available
              </small>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2024 MyCompany. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              Made with <i className="fas fa-heart text-danger"></i> using Next.js & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}