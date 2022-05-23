import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/organisms/TopNav";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Book from "./components/pages/Book";
import Bookdetail from "./components/templates/book/Bookdetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<TopNav />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
        </Route>
        <Route path="/book/:isbn" element={<Bookdetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
