import React from "react";
import "../css/coursecard.css"; 
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, instructor, rating, reviewCount, price, image, level, duration }) => {
  const navigate = useNavigate();
  return (
    <div className="coursecard">
      <div className="coursecard-img-wrapper">
        <img src={image} alt={title} className="coursecard-img" />
        <div className="coursecard-level">{level}</div>
      </div>
      <div className="coursecard-content">
        <h3 className="coursecard-title">{title}</h3>
        <p className="coursecard-instructor">{instructor}</p>
        <div className="coursecard-meta">
          <div className="coursecard-stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`coursecard-star${i < rating ? " coursecard-star-filled" : ""}`}
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="coursecard-reviews">({reviewCount})</span>
          <span className="coursecard-duration">{duration}</span>
        </div>
        <div className="coursecard-footer">
          <span className="coursecard-price">${price}</span>
          <button className="coursecard-add-btn" onClick={() => navigate("/login")}>Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
