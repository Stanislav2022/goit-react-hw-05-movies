import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Movies from './pages/MoviesPage/Movies'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/> } />
      </Routes>
    </div>
  );
};
