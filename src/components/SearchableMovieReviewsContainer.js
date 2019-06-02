import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query'
  + `api-key=${NYT_API_KEY} & query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
     reviews: "",
     searchTerm: ""
    };
  }

  handleChange = (event)=>{
    this.setState(
      {searchTerm: event.target.value }

    )
  }
  onsubmit = () => {
    fetch(`${URL}`+`${this.state.searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }


  




//before each hook error



  render() {
  return (
  <div className= "searchable-movie-reviews">
      <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input> <br></br>
      <button onClick={this.onsubmit} >Search movie reviews  </button>
    <MovieReviews  reviews={this.state.reviews}/>
  </div>

)

  }




}
