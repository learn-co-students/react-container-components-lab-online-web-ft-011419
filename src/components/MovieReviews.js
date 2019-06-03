import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map((review, index) =>
        <div className="review" key={index}>
          <h1>{review.display_title}</h1>
          <h3>{review.headline}</h3>
          <h4>{review.summary_short}</h4>
        </div>
      )}
    </div>
  )
}

export default MovieReviews
