// Code MovieReviews Here
import React from 'react'

const review = ({display_title, headline, summary_short }) => {
  return(
    <div className="review">
      <h2>{display_title}</h2>
      <h3>{headline}</h3>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list"> {reviews.map(review)}</div>

export default MovieReviews
