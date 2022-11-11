import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Movies from './pages/MoviesPage/Movies'
import Navbar from "components/Navbar/Navbar";
import MovieDetails from "./pages/MovieDetailsPage/MovieDetails"
import Cast from "pages/MovieDetailsPage/Cast/Cast";
import Reviews from "pages/MovieDetailsPage/Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />           
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
