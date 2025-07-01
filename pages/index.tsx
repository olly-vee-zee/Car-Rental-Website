// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <Layout title="Home - YourBusiness" description="Welcome to YourBusiness - Your trusted partner for exceptional services">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to YourBusiness
              </h1>
              <p className="lead mb-4">
                We provide exceptional services and solutions tailored to meet your unique needs. 
                Experience quality, reliability, and excellence with every interaction.
              </p>
              <div className="d-flex gap-3">
                <Link href="/offers" className="btn btn-light btn-lg">
                  View Our Offers
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="bg-light rounded p-5 text-primary">
                <h2>Your Success Starts Here</h2>
                <p className="mb-0">Professional • Reliable • Trusted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Why Choose Us?</h2>
            <p className="lead text-muted">Discover what makes us the preferred choice for businesses</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-award fs-4"></i>
                  </div>
                  <h5 className="card-title">Premium Quality</h5>
                  <p className="card-text text-muted">
                    We maintain the highest standards in everything we do, ensuring exceptional quality and reliability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-clock fs-4"></i>
                  </div>
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text text-muted">
                    Our dedicated team is available around the clock to assist you whenever you need help.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people fs-4"></i>
                  </div>
                  <h5 className="card-title">Expert Team</h5>
                  <p className="card-text text-muted">
                    Our experienced professionals bring years of expertise to deliver outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">500+</h3>
                <p className="text-muted">Satisfied Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">50+</h3>
                <p className="text-muted">Fleet Vehicles</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">10+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">24/7</h3>
                <p className="text-muted">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-primary mb-4">Ready to Get Started?</h2>
              <p className="lead text-muted mb-4">
                Join hundreds of satisfied customers who trust us with their business needs. 
                Contact us today to learn how we can help you succeed.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Contact Us Today
                </Link>
                <Link href="/reviews" className="btn btn-outline-primary btn-lg">
                  Read Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;