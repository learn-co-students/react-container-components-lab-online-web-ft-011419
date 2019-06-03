import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oQfGejoldvkp0A75FHqFs4yn7zKXtqYo';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState(
      {searchTerm: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`${URL} + ${this.state.searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
