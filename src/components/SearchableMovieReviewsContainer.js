import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tsC8m5KtvsinzZz8B3SHNkHOzlwhFYyO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class searchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState(
      {searchTerm: event.target.value}
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

        <MovieReviews movieData={this.state.reviews} />
      </div>
    )
  }
}

export default searchableMovieReviewsContainer
