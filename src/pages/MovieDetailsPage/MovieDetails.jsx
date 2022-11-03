import React, { useState , useEffect} from 'react'
import Loader from 'components/Loader/Loader';
import {useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export default function MovieDetails() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams;
    console.log(id);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(false);
                setError(null);
                const result = await getMovieDetails(id);
                setState(result);
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false)
          }
      }
        fetchMovie();
    }, [id])
    

  return (
      <div>
        <div>
            <img src="" alt="" />
            <h1>Title</h1>
            <p>User score</p>
            <h2>Overview</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat ex, voluptatibus debitis possimus nam ipsam reprehenderit! Dolorum, fugit optio! Recusandae incidunt consectetur odio dolorem repellat ipsa, eius magnam earum?</p>
            <h2>Ganres</h2>
            <p>Animation Drama</p>
        </div>
        <div>
            <h3>Additional animation</h3>
            <ul>
            <li>Cast</li>
            <li>Revievs</li>
            </ul>
        </div>
        <div>
            <ul>
            <li>
                <h3>Author:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis animi totam deleniti quam repellat quidem et corrupti voluptatum ut. Ab perspiciatis rerum temporibus commodi ipsa illo unde nisi consequuntur quo.</p>
            </li>
            <li>
                <h3>Author:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis animi totam deleniti quam repellat quidem et corrupti voluptatum ut. Ab perspiciatis rerum temporibus commodi ipsa illo unde nisi consequuntur quo.</p>
            </li>
            </ul>
        </div>
    </div>
  )
}
