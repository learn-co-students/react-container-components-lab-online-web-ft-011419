import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tsC8m5KtvsinzZz8B3SHNkHOzlwhFYyO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class latestMovieReviewContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({reviews: data.results})
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews movieData={this.state.reviews} />
      </div>
    )
  }
}

export default latestMovieReviewContainer
