import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import LoginCheck from "./LoginCheck";
import LogoutCheck from "./LogoutCheck";
import Header from "./organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/signout" element={<SignOut />} />
        </Route>
        <Route path="/" element={<LogoutCheck />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
