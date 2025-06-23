import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: 'fas fa-star',
      title: 'Premium Quality',
      description: 'We deliver top-notch quality in everything we do, ensuring your complete satisfaction with our services.',
      color: 'primary'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to assist you whenever you need help.',
      color: 'success'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Reliable',
      description: 'Your data and transactions are protected with industry-leading security measures and protocols.',
      color: 'warning'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'Our experienced professionals are committed to delivering exceptional results for every project.',
      color: 'info'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Best Value',
      description: 'Get the most value for your investment with our competitive pricing and comprehensive packages.',
      color: 'danger'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Fast Delivery',
      description: 'We understand the importance of time and ensure quick turnaround without compromising quality.',
      color: 'dark'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: 'fas fa-users' },
    { number: '24/7', label: 'Support', icon: 'fas fa-headset' },
    { number: '5★', label: 'Rating', icon: 'fas fa-star' },
    { number: '100%', label: 'Satisfaction', icon: 'fas fa-heart' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInLeft">
                Welcome to MyCompany
              </h1>
              <p className="lead mb-4">
                We provide professional services with excellence, reliability, and innovation. 
                Your success is our priority, and we're here to help you achieve your goals 
                with our comprehensive solutions.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/offers" className="btn btn-custom btn-lg">
                  <i className="fas fa-tags me-2"></i>
                  View Our Offers
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  Contact Us
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-4 text-center text-lg-start">
                {stats.map((stat, index) => (
                  <div key={index} className="flex-fill">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <i className={`${stat.icon} me-2 fs-4`}></i>
                      <div>
                        <h4 className="mb-0 fw-bold">{stat.number}</h4>
                        <small className="opacity-75">{stat.label}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="text-center">
                <div className="bg-white rounded-4 p-5 shadow-lg">
                  <h3 className="text-dark mb-3">Get Started Today!</h3>
                  <p className="text-muted mb-4">
                    Join thousands of satisfied customers who trust us with their business needs.
                  </p>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                        <i className="fas fa-chart-line text-primary fs-2 mb-2"></i>
                        <h6 className="text-primary mb-0">Growth</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success bg-opacity-10 rounded-3 p-3">
                        <i className="fas fa-award text-success fs-2 mb-2"></i>
                        <h6 className="text-success mb-0">Quality</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-warning bg-opacity-10 rounded-3 p-3">
                        <i className="fas fa-lightning-bolt text-warning fs-2 mb-2"></i>
                        <h6 className="text-warning mb-0">Speed</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-info bg-opacity-10 rounded-3 p-3">
                        <i className="fas fa-handshake text-info fs-2 mb-2"></i>
                        <h6 className="text-info mb-0">Trust</h6>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn-primary btn-lg mt-4 w-100">
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Why Choose MyCompany?</h2>
              <p className="lead text-muted">
                We offer comprehensive solutions backed by years of experience and a commitment to excellence
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 card-hover border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className={`feature-icon bg-${feature.color} bg-opacity-10 mb-3`}>
                      <i className={`${feature.icon} text-${feature.color} fs-2`}></i>
                    </div>
                    <h5 className="card-title fw-bold">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead text-muted">
                Explore our comprehensive range of professional services designed to meet your needs
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card card-hover border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-tags text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Special Offers</h5>
                  <p className="card-text text-muted">
                    Discover our latest deals and packages designed to give you the best value.
                  </p>
                  <Link href="/offers" className="btn btn-outline-primary">
                    View Offers
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card card-hover border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-car text-success fs-1 mb-3"></i>
                  <h5 className="card-title">Our Fleet</h5>
                  <p className="card-text text-muted">
                    Browse our modern and well-maintained fleet of vehicles for all your needs.
                  </p>
                  <Link href="/fleet" className="btn btn-outline-success">
                    View Fleet
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card card-hover border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-headset text-info fs-1 mb-3"></i>
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text text-muted">
                    Get help whenever you need it with our round-the-clock customer support.
                  </p>
                  <Link href="/help" className="btn btn-outline-info">
                    Get Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Join our community of satisfied customers and experience the difference that 
                professional service makes. Contact us today for a free consultation.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link href="/contact" className="btn btn-light btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  Contact Us Today
                </Link>
                <Link href="/reviews" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-star me-2"></i>
                  Read Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}