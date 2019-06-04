import React from 'react';
const Review = ({ display_title, headline }) => {
  return (
    <div className="review">
      <h1>{display_title}</h1>
      <p>{headline}</p>
    </div>
  )
}
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)
export default MovieReviews
