import { useState, useEffect } from "react"
import Loader from "components/Loader/Loader";
import {useParams} from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                setError(null);
                const reviews = await getMovieReviews(id);
                console.log(reviews);
                setReviews(reviews)
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false)
          }
      }
        fetchReviews();
  }, [id])

 const element = reviews.map(({ id, author, content}) => 
  (<li key={id}>
    <h4>Author: {author}</h4>
    <p> {content}</p>
  </li>));

  return (
    <div>
      {loading && <Loader />}
      {error && <p>There is no information about reviews</p>}
      {reviews && <ul>{element}</ul>}
  </div>

  )
}
