import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fCV4O6c4NRzZDYNq';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  };
  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  };
};
