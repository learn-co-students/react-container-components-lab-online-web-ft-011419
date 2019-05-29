import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review =>
        <p className="review">
          <h1>{review.headline}</h1>
          <h6>{review.summary_short}</h6>
        </p>
      )}
    </div>
  )
}

export default MovieReviews