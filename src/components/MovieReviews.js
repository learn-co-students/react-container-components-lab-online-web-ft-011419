// Code MovieReviews Here
const MovieReviews = ({reviews}) =>  {
return(
  <div className= "review-list">
{reviews.map(review =>{
  return (

    <div className="review">
  <li>{review.display_title}</li>
      <li>{review.summary_short}</li>
      <li>{review.opening_date}</li>
  </div>
    )
})}
    </div>)
}




export default MovieReviews