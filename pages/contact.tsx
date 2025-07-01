// pages/contact.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'bi-telephone-fill',
      title: 'Phone',
      info: '(555) 123-4567',
      description: '24/7 Phone Support',
      action: 'tel:+1555123456'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      info: 'support@yourbusiness.com',
      description: 'Get Support via Email',
      action: 'mailto:support@yourbusiness.com'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Address',
      info: '123 Business Street',
      description: 'City, State 12345',
      action: '#'
    },
    {
      icon: 'bi-chat-dots-fill',
      title: 'Live Chat',
      info: 'Online Now',
      description: 'Instant Support Available',
      action: '#'
    }
  ];

  return (
    <Layout title="Contact Us - YourBusiness" description="Get in touch with our team for support and inquiries">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
            <p className="lead">We're here to help! Reach out to us anytime for support, questions, or feedback</p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-primary fw-bold">Get In Touch</h2>
          <div className="row g-4 mb-5">
            {contactMethods.map((method, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      <i className={`bi ${method.icon} fs-4`}></i>
                    </div>
                    <h5 className="card-title">{method.title}</h5>
                    <h6 className="text-primary mb-2">{method.info}</h6>
                    <p className="card-text text-muted small">{method.description}</p>
                    {method.action !== '#' && (
                      <a href={method.action} className="btn btn-outline-primary btn-sm">
                        Contact Now
                      </a>
                    )}
                    {method.action === '#' && method.title === 'Live Chat' && (
                      <button className="btn btn-outline-primary btn-sm">
                        Start Chat
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-primary fw-bold">Send us a Message</h2>
                  <p className="text-center text-muted mb-4">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>

                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Thank you for your message! We'll get back to you within 24 hours.
                      <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <select
                          className="form-select"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Choose a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="booking">Booking Question</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing & Payment</option>
                          <option value="complaint">Complaint</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="consent" required />
                          <label className="form-check-label text-muted small" htmlFor="consent">
                            I agree to the privacy policy and consent to my personal data being processed for the purpose of responding to my inquiry.
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send me-2"></i>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="text-primary fw-bold mb-4">Business Hours</h3>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex justify-content-between p-3 bg-light rounded">
                    <span className="fw-semibold">Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex justify-content-between p-3 bg-light rounded">
                    <span className="fw-semibold">Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex justify-content-between p-3 bg-light rounded">
                    <span className="fw-semibold">Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex justify-content-between p-3 bg-primary text-white rounded">
                    <span className="fw-semibold">Emergency</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded">
                <h4 className="text-primary mb-3">Quick Response Promise</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Email responses within 4 hours during business hours
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Phone calls answered within 3 rings
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Live chat support available 24/7
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Emergency assistance available anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-2">Looking for quick answers?</h3>
              <p className="mb-0">Check out our comprehensive FAQ section for instant solutions to common questions.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/help" className="btn btn-light btn-lg">
                <i className="bi bi-question-circle me-2"></i>
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;