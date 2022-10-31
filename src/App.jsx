import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Movies from './pages/MoviesPage/Movies'
import Navbar from "components/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/> } />
      </Routes>
    </div>
  );
};
