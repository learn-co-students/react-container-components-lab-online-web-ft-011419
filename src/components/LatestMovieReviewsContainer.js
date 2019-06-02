import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Rpd2iGWdRG6fpuK8i0eA4GHRxI0Mcumz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export class LatestMovieReviewsContainer  extends Component {
  constructor(props) {
    super(props);

    this.state = {
     reviews: []
    };
  }



componentDidMount(){
fetch(`${URL}`)
  .then(response => response.json())
  .then(data => this.setState({reviews: data.results}))
}


render() {
  return (
    <div classname="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />

    </div>
  )

}




}