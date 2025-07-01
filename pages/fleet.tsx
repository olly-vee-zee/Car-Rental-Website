// pages/fleet.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

const FleetPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: "Luxury Sedan",
      type: "sedan",
      passengers: 4,
      features: ["GPS Navigation", "Climate Control", "Premium Audio", "Leather Seats"],
      available: true,
      pricePerDay: 75,
      image: "https://via.placeholder.com/400x250/0d6efd/ffffff?text=Luxury+Sedan"
    },
    {
      id: 2,
      name: "Executive SUV",
      type: "suv",
      passengers: 7,
      features: ["4WD", "Premium Sound", "Heated Seats", "Panoramic Roof"],
      available: true,
      pricePerDay: 95,
      image: "https://via.placeholder.com/400x250/0d6efd/ffffff?text=Executive+SUV"
    },
    {
      id: 3,
      name: "Sports Coupe",
      type: "sports",
      passengers: 2,
      features: ["Turbo Engine", "Sport Suspension", "Racing Seats", "Performance Tires"],
      available: false,
      pricePerDay: 120,
      image: "https://via.placeholder.com/400x250/6c757d/ffffff?text=Sports+Coupe"
    },
    {
      id: 4,
      name: "Family Van",
      type: "van",
      passengers: 8,
      features: ["Sliding Doors", "Entertainment System", "Extra Storage", "Child Safety"],
      available: true,
      pricePerDay: 85,
      image: "https://via.placeholder.com/400x250/0d6efd/ffffff?text=Family+Van"
    },
    {
      id: 5,
      name: "Compact Car",
      type: "compact",
      passengers: 4,
      features: ["Fuel Efficient", "Easy Parking", "Bluetooth", "USB Charging"],
      available: true,
      pricePerDay: 45,
      image: "https://via.placeholder.com/400x250/0d6efd/ffffff?text=Compact+Car"
    },
    {
      id: 6,
      name: "Premium Sedan",
      type: "sedan",
      passengers: 5,
      features: ["Massage Seats", "Premium Audio", "Ambient Lighting", "Wi-Fi Hotspot"],
      available: true,
      pricePerDay: 110,
      image: "https://via.placeholder.com/400x250/0d6efd/ffffff?text=Premium+Sedan"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Vehicles' },
    { key: 'sedan', label: 'Sedans' },
    { key: 'suv', label: 'SUVs' },
    { key: 'sports', label: 'Sports Cars' },
    { key: 'van', label: 'Vans' },
    { key: 'compact', label: 'Compact Cars' }
  ];

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === activeFilter);

  return (
    <Layout title="Fleet - YourBusiness" description="Explore our diverse fleet of premium vehicles">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Our Vehicle Fleet</h1>
            <p className="lead">Discover our premium collection of vehicles for every occasion</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    className={`btn ${
                      activeFilter === filter.key 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'
                    }`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="card-img-top"
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className={`badge ${
                        vehicle.available ? 'bg-success' : 'bg-danger'
                      }`}>
                        {vehicle.available ? 'Available' : 'Rented'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">{vehicle.name}</h5>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-people-fill text-muted me-2"></i>
                      <span className="text-muted">{vehicle.passengers} passengers</span>
                    </div>
                    
                    <div className="mb-3">
                      <h6 className="text-muted mb-2">Features:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {vehicle.features.map((feature, index) => (
                          <span key={index} className="badge bg-light text-dark border">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="h5 text-primary fw-bold">${vehicle.pricePerDay}</span>
                        <span className="text-muted">/day</span>
                      </div>
                      <button 
                        className={`btn ${
                          vehicle.available 
                            ? 'btn-primary' 
                            : 'btn-secondary'
                        }`}
                        disabled={!vehicle.available}
                      >
                        {vehicle.available ? 'Book Now' : 'Unavailable'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Fleet Statistics</h2>
            <p className="lead text-muted">Our fleet by the numbers</p>
          </div>
          
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">50+</h3>
                <p className="text-muted">Total Vehicles</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">95%</h3>
                <p className="text-muted">Availability Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">2023</h3>
                <p className="text-muted">Average Model Year</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold text-primary">24/7</h3>
                <p className="text-muted">Maintenance Support</p>
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
              <h2 className="display-5 fw-bold text-primary mb-4">Need Help Choosing?</h2>
              <p className="lead text-muted mb-4">
                Our team can help you select the perfect vehicle for your needs. 
                Contact us for personalized recommendations and special rates.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="/contact" className="btn btn-primary btn-lg">
                  Contact Us
                </a>
                <a href="/help" className="btn btn-outline-primary btn-lg">
                  Get Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FleetPage;