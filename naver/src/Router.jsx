import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Book from "./components/pages/Book";
import Movie from "./components/pages/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
