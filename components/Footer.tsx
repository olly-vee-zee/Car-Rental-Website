// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-primary">YourBusiness</h5>
            <p className="text-light">
              Providing exceptional services and solutions for all your business needs. 
              We're committed to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-primary">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link href="/offers" className="text-light text-decoration-none">Offers</Link></li>
              <li><Link href="/fleet" className="text-light text-decoration-none">Fleet</Link></li>
              <li><Link href="/reviews" className="text-light text-decoration-none">Reviews</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-primary">Support</h6>
            <ul className="list-unstyled">
              <li><Link href="/help" className="text-light text-decoration-none">Help Center</Link></li>
              <li><Link href="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="text-primary">Contact Info</h6>
            <p className="text-light mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Business Street, City, State 12345
            </p>
            <p className="text-light mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              (555) 123-4567
            </p>
            <p className="text-light mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@yourbusiness.com
            </p>
            <div className="mt-3">
              <a href="#" className="text-primary me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-primary me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-primary me-3"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-primary"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              &copy; 2024 YourBusiness. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0">
              Built with Next.js & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;