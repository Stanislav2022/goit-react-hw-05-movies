import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/> } />
      </Routes>
    </div>
  );
};
