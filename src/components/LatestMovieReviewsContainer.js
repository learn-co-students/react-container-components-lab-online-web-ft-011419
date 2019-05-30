import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=uXBMA7ZGeB4kdr1XGx4UPF4JQ3yBSHvi')
        .then(resp => resp.json())
        .then(data => {this.setState({
            reviews: data.results 
        })})
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Movies</h1>
                <MovieReviews movieData={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer