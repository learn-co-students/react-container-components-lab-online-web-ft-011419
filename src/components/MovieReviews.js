import React from 'react';

 const MovieReviews = ({ movieData }) => {
    return (
      <div className="review-list">
        {movieData.map(movie => {
          return (
            <div className="review">
              <h3>{movie.display_title}</h3>
              <p>{movie.headline}</p>
              <p>{movie.summary_short}</p>
            </div>
          )
        })}
      </div>
    )
  }

  MovieReviews.defaultProps = {
    movieData: []
  }

export default MovieReviews
