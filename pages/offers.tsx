// pages/offers.tsx
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const OffersPage: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: "Basic Package",
      price: "$99",
      period: "/month",
      features: [
        "24/7 Customer Support",
        "Basic Fleet Access",
        "Monthly Reports",
        "Email Support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      id: 2,
      title: "Professional Package",
      price: "$199",
      period: "/month",
      features: [
        "24/7 Priority Support",
        "Full Fleet Access",
        "Weekly Reports",
        "Phone & Email Support",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      id: 3,
      title: "Enterprise Package",
      price: "$399",
      period: "/month",
      features: [
        "Dedicated Account Manager",
        "Unlimited Fleet Access",
        "Real-time Reports",
        "24/7 Phone Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Priority Maintenance",
        "Custom Solutions"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  const promotions = [
    {
      title: "New Customer Discount",
      description: "Get 20% off your first month with any package",
      code: "WELCOME20",
      validUntil: "December 31, 2024"
    },
    {
      title: "Annual Subscription Bonus",
      description: "Save 2 months when you pay annually",
      code: "ANNUAL2024",
      validUntil: "Ongoing"
    },
    {
      title: "Referral Program",
      description: "Refer a friend and both get $50 credit",
      code: "REFER50",
      validUntil: "Ongoing"
    }
  ];

  return (
    <Layout title="Offers - YourBusiness" description="Explore our competitive pricing packages and special offers">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Our Service Packages</h1>
            <p className="lead">Choose the perfect plan for your business needs</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {offers.map((offer) => (
              <div key={offer.id} className="col-lg-4 col-md-6">
                <div className={`card h-100 ${offer.popular ? 'border-primary shadow-lg' : 'shadow-sm'}`}>
                  {offer.popular && (
                    <div className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2">
                      Most Popular
                    </div>
                  )}
                  <div className="card-body text-center p-4">
                    <h5 className="card-title text-primary fw-bold">{offer.title}</h5>
                    <div className="my-4">
                      <span className="display-4 fw-bold text-dark">{offer.price}</span>
                      <span className="text-muted">{offer.period}</span>
                    </div>
                    <ul className="list-unstyled">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-4 pt-0">
                    <Link
                      href="/contact"
                      className={`btn w-100 ${
                        offer.popular 
                          ? 'btn-primary' 
                          : 'btn-outline-primary'
                      }`}
                    >
                      {offer.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Promotions */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Special Promotions</h2>
            <p className="lead text-muted">Limited time offers and ongoing discounts</p>
          </div>
          
          <div className="row g-4">
            {promotions.map((promo, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                        <i className="bi bi-gift"></i>
                      </div>
                      <div>
                        <h6 className="card-title fw-bold text-primary">{promo.title}</h6>
                        <p className="card-text text-muted mb-2">{promo.description}</p>
                        <div className="small">
                          <span className="badge bg-secondary me-2">Code: {promo.code}</span>
                          <span className="text-muted">Valid until: {promo.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Compare Features</h2>
            <p className="lead text-muted">See what's included in each package</p>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col" className="text-center">Basic</th>
                  <th scope="col" className="text-center">Professional</th>
                  <th scope="col" className="text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24/7 Support</td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                </tr>
                <tr>
                  <td>Fleet Access</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Full</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td className="text-center">Monthly</td>
                  <td className="text-center">Weekly</td>
                  <td className="text-center">Real-time</td>
                </tr>
                <tr>
                  <td>Advanced Analytics</td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                </tr>
                <tr>
                  <td>Custom Integrations</td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                </tr>
                <tr>
                  <td>Dedicated Account Manager</td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle-fill text-success"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Choose Your Package?</h2>
              <p className="lead mb-4">
                Still have questions? Our team is here to help you find the perfect solution for your business.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/contact" className="btn btn-light btn-lg">
                  Contact Sales
                </Link>
                <Link href="/help" className="btn btn-outline-light btn-lg">
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OffersPage;