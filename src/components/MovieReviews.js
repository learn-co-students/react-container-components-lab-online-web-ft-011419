// Code MovieReviews Here
import React from 'react';
const MovieReviews = props =>  {
return(
  <div className= "review-list">
{props.reviews.map(review =>{
  return (

    <div className="review">
  <li>{review.display_title}</li>
  <li>{review.display_title}</li>
  </div>
    )
})}
    </div>)
}




export default MovieReviews