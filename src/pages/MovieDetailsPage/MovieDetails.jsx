import React, { useState , useEffect} from 'react'
import Loader from 'components/Loader/Loader';
import {useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from 'services/api';
import css from "./MovieDetails.module.css";

export default function MovieDetails() {
    const [state, setState] = useState(null);
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await getMovieDetails(id);
                const credits = await getMovieCredits(id);
                console.log(credits);
                setState(result);
                setCredits(credits)
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false)
          }
      }
        fetchMovie();
    }, [id])

    const createPosterFilm = (posterLink) => {
        if (posterLink) {
            return `https://image.tmdb.org/t/p/w200/${posterLink}`;
        }
    };

    const createGenresFilmArray = (genresArray) => {
        if (genresArray.length !== 0) {
            let genresFilm = [];
            const genresName = genresArray.reduce((acc, item) => {
                genresFilm.push( ` ${item.name}`);
                }, 0);
            return genresFilm;
    }
    return `No genre`;
    }

    const createYearFilm =(year) => {
        if (year) {
            return year;
        }
        return `Year: N/A`;
    }
    
    const createRating= (ratind) => {
  if (ratind) {
    return (ratind*10).toFixed(0);
  }
  return `0`;
    }
    
    const goBack = () => { navigate( -1) }; 

return (
    <div>
        <button on onClick={goBack}>Go back</button>
        {loading && <Loader />}
        {error && <p>Error</p>}
        {state && (
            <>
            <div className={css.section} >
                    <img className={css.films__img} loading="lazy" src={createPosterFilm(state.poster_path)} alt={state.title} />
                    <div>
                                        <h1>{state.title} ({createYearFilm(String(state.release_date).slice(0, 4))})</h1>
                <p>User Score {createRating(state.vote_average)}%</p>
                <h2>Overview</h2>
                <p>{state.overview}</p>
                <h2>Ganres </h2>
                <p>{createGenresFilmArray(state.genres)}</p>
                    </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                <li><NavLink to={'cast'}>Cast</NavLink></li>
                <li><NavLink to={'revievs'}>Revievs</NavLink></li>
                </ul>
            </div>
            <div>
               <Outlet/>
            </div>
        </>)}
</div>
  )
}
