import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'
// Code SearchableMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
  state={
    searchTerm: '',
    reviews: []
  }

  handleSearchMovieInput = event => this.setState({searchTerm: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    fetch(SEARCH_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({reviews: res.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <input id="search-input" type="text" onChange={this.handleSearchMovieInput}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
