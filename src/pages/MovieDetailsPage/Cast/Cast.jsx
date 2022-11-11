import { useState, useEffect } from "react"
import Loader from "components/Loader/Loader";
import {useParams} from 'react-router-dom';
import { getMovieCredits } from 'services/api';

export default function Cast() {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

      const { id } = useParams();
  
  useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                setError(null);
                const credits = await getMovieCredits(id);
                setCredits(credits)
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false)
          }
      }
        fetchCast();
  }, [id])

      const createPhotoActor = (profile_path) => {
        if (profile_path) {
            return `https://image.tmdb.org/t/p/w200/${profile_path}`;
        }
    };
  
  const element = credits.map(({ id, name, profile_path, character
 }) => 
  (<li key={id}>
      <img loading="lazy" src={createPhotoActor(profile_path)} alt={name} width="100px"/>
    <h4>{name}</h4>
    <p>Character: {character}</p>
  </li>));

  return (
    <div>
      {loading && <Loader />}
      {error && <p>There is no information about the cast</p>}
      {credits && <ul>{element}</ul>}
  </div>

  )
}
