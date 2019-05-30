import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    onChangeText = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=uXBMA7ZGeB4kdr1XGx4UPF4JQ3yBSHvi`)
        .then(resp => resp.json())
        .then(data => {this.setState({
            reviews: data.results
            })}
        )
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.onSubmit(event)}>
                    <input type="text" value={this.state.searchTerm} onChange={event => this.onChangeText(event)} />
                    <input type="submit" value="Search" />
                </form>
                <MovieReviews movieData={this.state.reviews} />
            </div>

        )
    }
}

export default SearchableMovieReviewsContainer
