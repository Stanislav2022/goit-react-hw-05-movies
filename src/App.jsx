import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Movies from './pages/MoviesPage/Movies'
import Navbar from "components/Navbar/Navbar";
import MovieDetails from "./pages/MovieDetailsPage/MovieDetails"

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
