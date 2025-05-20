import { useState } from 'react';

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className='stars-rating-container'>
            {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            console.log
            return (
                <button
                type="button"
                key={index}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
                >
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                    stroke="#ffc107" 
                    strokeWidth="0.5" 
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                </button>
            );
            })}
        </div>
    );
}