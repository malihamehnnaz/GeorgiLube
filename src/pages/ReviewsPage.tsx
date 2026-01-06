import React from 'react';
import Reviews from '../components/Reviews';

const ReviewsPage: React.FC = () => {
    // We can reuse the Reviews component, maybe wrapped with a page title
    return (
        <div style={{paddingTop: '80px', minHeight: '80vh'}}>
            <h1 style={{textAlign: 'center', marginBottom: '20px'}}>What Our Customers Say</h1>
            <Reviews />
        </div>
    );
};

export default ReviewsPage;