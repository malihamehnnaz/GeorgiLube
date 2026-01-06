import React from 'react';
import { reviews } from '../data/content';
import './Reviews.css';

const Reviews: React.FC = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
