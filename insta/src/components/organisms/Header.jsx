import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Home } from "../../assets/images/icons/home.svg";
import { ReactComponent as Fly } from "../../assets/images/icons/fly.svg";
import { ReactComponent as Plus } from "../../assets/images/icons/plus.svg";
import { ReactComponent as Browser } from "../../assets/images/icons/browser.svg";
import { ReactComponent as Heart } from "../../assets/images/icons/heart.svg";

const Header = () => {
  return (
    <>
      <Containter>
        <Main>
          <Link to="/">
            <ImgLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </Link>
          <Search>
            <InputSearch />
          </Search>
          <Nav>
            <Home />
            <Fly />
            <Plus />
            <Browser />
            <Heart />
          </Nav>
        </Main>
      </Containter>
      <Outlet />
    </>
  );
};

const Containter = styled.header`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
`;

const Main = styled.div`
  height: 100%;
  max-width: 975px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgLogo = styled.img``;

const Search = styled.div``;
const InputSearch = styled.input``;
const Nav = styled.nav``;

export default Header;
