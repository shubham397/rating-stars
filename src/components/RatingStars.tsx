import React, { useState } from "react";
import "./ratingStars.css";

interface RatingStarsProps {
  totalStars?: number;
  size?: number;
  color?: string;
  onChange?: (rating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  totalStars = 5,
  size = 30,
  color = "#FFD700",
  onChange,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onChange) onChange(index);
  };

  return (
    <>
      <h3 className="heading">Total Rating - {rating}</h3>
      <div className="rating-stars">
        {Array.from({ length: totalStars }, (_, index) => {
          const starValue = index + 1;
          return (
            <div
              key={starValue}
              className={`star ${
                starValue <= (hover || rating) ? "active" : ""
              }`}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              style={{ fontSize: `${size}px`, color }}
            >
              ★
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RatingStars;
