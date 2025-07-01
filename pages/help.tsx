// pages/help.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

const HelpPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    { key: 'general', label: 'General Questions', icon: 'bi-question-circle' },
    { key: 'booking', label: 'Booking & Reservations', icon: 'bi-calendar-check' },
    { key: 'payment', label: 'Payment & Billing', icon: 'bi-credit-card' },
    { key: 'fleet', label: 'Vehicle Information', icon: 'bi-car-front' },
    { key: 'support', label: 'Support & Contact', icon: 'bi-headset' }
  ];

  const faqs = {
    general: [
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive vehicle rental services including luxury sedans, SUVs, sports cars, family vans, and compact cars. Our services include 24/7 customer support, GPS navigation, insurance coverage, and roadside assistance."
      },
      {
        question: "Do I need a special license to rent your vehicles?",
        answer: "You need a valid driver's license that has been held for at least 1 year. International visitors need a valid international driving permit along with their home country license."
      },
      {
        question: "What is your age requirement for rentals?",
        answer: "The minimum age for renting is 21 years old. Drivers under 25 may be subject to a young driver surcharge."
      },
      {
        question: "Do you offer delivery and pickup services?",
        answer: "Yes, we offer vehicle delivery and pickup services within our service area for an additional fee. This service can be arranged during the booking process."
      }
    ],
    booking: [
      {
        question: "How do I make a reservation?",
        answer: "You can make a reservation through our website, mobile app, or by calling our customer service. Simply select your dates, choose a vehicle, and complete the booking process."
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer: "Yes, you can modify or cancel your reservation up to 24 hours before the pickup time without penalty. Changes made within 24 hours may be subject to fees."
      },
      {
        question: "What happens if I need to extend my rental?",
        answer: "You can extend your rental by contacting us at least 4 hours before your scheduled return time, subject to vehicle availability and additional charges."
      },
      {
        question: "Do you offer long-term rentals?",
        answer: "Yes, we offer discounted rates for rentals of 7 days or more. Contact our sales team for special long-term pricing and packages."
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and cash deposits. A credit card is required for security deposit purposes."
      },
      {
        question: "When will my card be charged?",
        answer: "Your card will be charged at the time of vehicle pickup. A pre-authorization hold will be placed on your card when you make the reservation."
      },
      {
        question: "What is included in the rental price?",
        answer: "The rental price includes the vehicle, basic insurance coverage, unlimited mileage within our service area, and 24/7 customer support. Additional services like GPS, child seats, and premium insurance are available for extra fees."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, we believe in transparent pricing. All fees and charges are clearly displayed during the booking process. Additional charges may apply for services like fuel, late returns, or damage."
      }
    ],
    fleet: [
      {
        question: "How old are your vehicles?",
        answer: "Our fleet consists of vehicles that are typically 1-3 years old. We regularly update our fleet to ensure you have access to the latest models and safety features."
      },
      {
        question: "Are your vehicles regularly maintained?",
        answer: "Yes, all our vehicles undergo regular maintenance and safety inspections. Each vehicle is thoroughly cleaned and inspected before every rental."
      },
      {
        question: "What should I do if the vehicle breaks down?",
        answer: "Contact our 24/7 emergency roadside assistance immediately. We will arrange for repairs or provide a replacement vehicle as quickly as possible."
      },
      {
        question: "Can I smoke in the vehicles?",
        answer: "No, all our vehicles are non-smoking. A cleaning fee will be charged if smoking odor is detected in the vehicle upon return."
      }
    ],
    support: [
      {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support team 24/7 via phone at (555) 123-4567, email at support@yourbusiness.com, or through our live chat feature on the website."
      },
      {
        question: "What should I do in case of an accident?",
        answer: "First, ensure everyone's safety and call emergency services if needed. Then contact our emergency hotline immediately. We will guide you through the necessary steps and paperwork."
      },
      {
        question: "Do you offer roadside assistance?",
        answer: "Yes, we provide 24/7 roadside assistance for all our rental vehicles, including jump starts, flat tire changes, lockout service, and emergency fuel delivery."
      },
      {
        question: "How do I report a problem with my rental?",
        answer: "Contact our customer service immediately via phone or through the mobile app. We aim to resolve all issues quickly and will provide alternative solutions when necessary."
      }
    ]
  };

  const filteredFaqs = searchTerm 
    ? Object.values(faqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs[activeCategory as keyof typeof faqs];

  return (
    <Layout title="Help Center - YourBusiness" description="Find answers to frequently asked questions and get support">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Help Center</h1>
            <p className="lead">Find answers to your questions and get the support you need</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-primary fw-bold">Need Immediate Help?</h2>
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-telephone-fill fs-4"></i>
                  </div>
                  <h5 className="card-title">Call Us</h5>
                  <p className="card-text text-muted">24/7 Phone Support</p>
                  <a href="tel:+1555123456" className="btn btn-outline-primary">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-chat-dots-fill fs-4"></i>
                  </div>
                  <h5 className="card-title">Live Chat</h5>
                  <p className="card-text text-muted">Instant Online Support</p>
                  <button className="btn btn-outline-primary">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-envelope-fill fs-4"></i>
                  </div>
                  <h5 className="card-title">Email Us</h5>
                  <p className="card-text text-muted">Get Support via Email</p>
                  <a href="mailto:support@yourbusiness.com" className="btn btn-outline-primary">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 text-primary fw-bold">Frequently Asked Questions</h2>
          
          {!searchTerm && (
            <div className="row mb-5">
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.key}
                      className={`btn ${activeCategory === category.key ? 'btn-primary' : 'btn-outline-primary'} mb-2`}
                      onClick={() => setActiveCategory(category.key)}
                    >
                      <i className={`bi ${category.icon} me-2`}></i>
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-12">
              <div className="accordion" id="faqAccordion">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="accordion-item border-0 shadow-sm mb-3">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-5">
                  <i className="bi bi-search fs-1 text-muted mb-3"></i>
                  <h4 className="text-muted">No results found</h4>
                  <p className="text-muted">Try adjusting your search terms or browse by category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-2">Still need help?</h3>
              <p className="mb-0">Our support team is available 24/7 to assist you with any questions or concerns.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+1555123456" className="btn btn-light btn-lg">
                <i className="bi bi-telephone-fill me-2"></i>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpPage;