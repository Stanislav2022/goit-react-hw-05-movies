import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import('./pages/HomePage/Home'), {});
const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
const Navbar = lazy(() => import('components/Navbar/Navbar'));
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetailsPage/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetailsPage/Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />           
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
