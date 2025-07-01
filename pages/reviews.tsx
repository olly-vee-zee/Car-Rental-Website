// pages/reviews.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

const ReviewsPage: React.FC = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      title: "Exceptional Service!",
      comment: "I've been using their services for over a year now and I'm consistently impressed. The vehicles are always clean, well-maintained, and the staff is incredibly professional.",
      date: "2024-06-15",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      title: "Reliable and Professional",
      comment: "Perfect for business trips. The booking process is seamless and the vehicles are always ready on time. Highly recommended for corporate use.",
      date: "2024-06-10",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      title: "Great Experience Overall",
      comment: "Very satisfied with the service. The only minor issue was a slight delay during pickup, but the customer service team handled it well and offered compensation.",
      date: "2024-06-05",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      title: "Outstanding Customer Support",
      comment: "Had an issue during my trip and their 24/7 support was incredible. They resolved everything quickly and professionally. This is why I keep coming back.",
      date: "2024-05-28",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Williams",
      rating: 5,
      title: "Perfect for Family Trips",
      comment: "The family van was spacious and comfortable for our vacation. Kids loved the entertainment system. Will definitely book again for our next family trip.",
      date: "2024-05-20",
      verified: true
    },
    {
      id: 6,
      name: "Robert Kim",
      rating: 4,
      title: "Good Value for Money",
      comment: "Competitive pricing and good quality vehicles. The compact car was perfect for city driving and very fuel efficient.",
      date: "2024-05-15",
      verified: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log('Review submitted:', newReview);
    // Reset form
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      title: '',
      comment: ''
    });
    alert('Thank you for your review! It will be published after verification.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`bi ${
              star <= rating ? 'bi-star-fill' : 'bi-star'
            } text-warning me-1`}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          ></i>
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  return (
    <Layout title="Reviews - YourBusiness" description="Read customer reviews and share your experience with our services">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Customer Reviews</h1>
            <p className="lead">See what our customers are saying about our services</p>
          </div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <h3 className="display-3 fw-bold text-primary">{averageRating.toFixed(1)}</h3>
                  {renderStars(Math.round(averageRating))}
                  <p className="text-muted mt-2">Based on {reviews.length} reviews</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Rating Distribution</h5>
                  {ratingDistribution.map((dist) => (
                    <div key={dist.rating} className="row align-items-center mb-2">
                      <div className="col-2">
                        <span className="small">{dist.rating} star</span>
                      </div>
                      <div className="col-8">
                        <div className="progress" style={{height: '8px'}}>
                          <div 
                            className="progress-bar bg-warning" 
                            style={{width: `${dist.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 text-end">
                        <span className="small text-muted">{dist.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 text-primary fw-bold">What Our Customers Say</h2>
          <div className="row g-4">
            {reviews.map((review) => (
              <div key={review.id} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 className="fw-bold mb-1">{review.name}</h6>
                        <small className="text-muted">{new Date(review.date).toLocaleDateString()}</small>
                      </div>
                      <div className="d-flex align-items-center">
                        {review.verified && (
                          <span className="badge bg-success me-2">Verified</span>
                        )}
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <h6 className="text-primary mb-2">{review.title}</h6>
                    <p className="text-muted mb-0">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <h3 className="text-center mb-4 text-primary fw-bold">Write a Review</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={newReview.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={newReview.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="rating" className="form-label">Rating *</label>
                        <select
                          className="form-select"
                          id="rating"
                          name="rating"
                          value={newReview.rating}
                          onChange={handleInputChange}
                          required
                        >
                          <option value={5}>5 Stars - Excellent</option>
                          <option value={4}>4 Stars - Very Good</option>
                          <option value={3}>3 Stars - Good</option>
                          <option value={2}>2 Stars - Fair</option>
                          <option value={1}>1 Star - Poor</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Review Title *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={newReview.title}
                          onChange={handleInputChange}
                          placeholder="Summarize your experience"
                          required
                        />
                      </div>
                      
                      <div className="col-12">
                        <label htmlFor="comment" className="form-label">Your Review *</label>
                        <textarea
                          className="form-control"
                          id="comment"
                          name="comment"
                          rows={4}
                          value={newReview.comment}
                          onChange={handleInputChange}
                          placeholder="Share your experience with our service..."
                          required
                        ></textarea>
                      </div>
                      
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5">
                          Submit Review
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

      {/* Trust Indicators */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold">500+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold">4.8</h3>
                <p>Average Rating</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold">98%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3">
                <h3 className="display-4 fw-bold">5</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;