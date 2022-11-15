import React, { useState, useEffect, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {useParams, Outlet, useLocation,Link } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import style from "./MovieDetails.module.css";


export default function MovieDetails() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
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

    const createPosterFilm = (posterLink) => {
        if (posterLink) {
            return `https://image.tmdb.org/t/p/w200/${posterLink}`;
        }
    };

    const createGenresFilmArray = (genresArray) => {
        if (genresArray.length !== 0) {
            let genresFilm = [];
            genresArray.reduce((acc, item) => 
                genresFilm.push( ` ${item.name}`)
            , 0);
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
    const location = useLocation;
    const cameBack = location.state?.from ?? '/';


return (
    <div>
        <Link to={cameBack}>Go back</Link>
        {loading && <Loader />}
        {error && <p>Something didn't go according to plan</p>}
        {state && (
            <>
                <div className={style.section}>
                    <img className={style.films__img} loading="lazy" src={createPosterFilm(state.poster_path)} alt={state.title} />
                    <div className={style.description}>
                        <h1>{state.title} ({createYearFilm(String(state.release_date).slice(0, 4))})</h1>
                        <p>User Score {createRating(state.vote_average)}%</p>
                        <h2>Overview</h2>
                        <p className={style.overview}>{state.overview}</p>
                        <h2>Ganres </h2>
                        <p>{createGenresFilmArray(state.genres)}</p>
                    </div>
                </div>
                <div className={style.section__border}>
                    <h3>Additional information</h3>
                    <ul>
                        <li><Link to={'cast'} state={{from:cameBack}}>Cast sat</Link></li>
                        <li><Link to={'reviews'} state={{from:cameBack}}>Reviews</Link></li>
                    </ul>
                </div>
                <div >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </>
        )}
    </div>
  )
}
