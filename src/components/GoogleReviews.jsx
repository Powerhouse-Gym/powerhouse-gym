import React from 'react';
import review1 from "../assets/reviews/review1.png"
import review2 from "../assets/reviews/review2.png"
import review3 from "../assets/reviews/review3.png"
import review4 from "../assets/reviews/review4.png"




function GoogleReviews() {
    return ( 
        <div className = "reviews-container">
            <h1>A local favorite, trusted and loved by hundreds across the community.</h1>
            <div className = "reviews">
                <img src = {review1} alt = "" />
                <img src = {review2}alt = "" />
                <img src = {review3}alt = "" />
            </div>
        </div>
     );
}

export default GoogleReviews;