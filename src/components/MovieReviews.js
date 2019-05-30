import React from 'react';

const MovieReviews = ({ movieData }) => {
    return (
        <div className="review-list">
            {movieData.map(movie => {
                return (
                    <div className="review">
                        <h4>{movie.display_title}</h4>
                        <p>{movie.headline}</p>
                        <p>{movie.opening_date}</p>
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