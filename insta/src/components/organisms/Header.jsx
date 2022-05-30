import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as ImgHome } from "../../assets/images/icons/home.svg";
import { ReactComponent as ImgFly } from "../../assets/images/icons/fly.svg";
import { ReactComponent as ImgPlus } from "../../assets/images/icons/plus.svg";
import { ReactComponent as ImgBrowser } from "../../assets/images/icons/browser.svg";
import { ReactComponent as ImgHeart } from "../../assets/images/icons/heart.svg";
import ModalAddPost from "./ModalAddPost";
import { useState } from "react";

const Header = () => {
  const [isModalAddPost, setIsModalAddPost] = useState(true);
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
            <BtnNav>
              <ImgHome />
            </BtnNav>
            <BtnNav>
              <ImgFly />
            </BtnNav>
            <BtnNav>
              <ImgPlus onClick={() => setIsModalAddPost(true)} />
            </BtnNav>
            <BtnNav>
              <ImgBrowser />
            </BtnNav>
            <BtnNav>
              <ImgHeart />
            </BtnNav>
          </Nav>
        </Main>
      </Containter>
      <Outlet />
      {isModalAddPost && (
        <ModalAddPost onClose={() => setIsModalAddPost(false)} />
      )}
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
const BtnNav = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 5px;
`;

export default Header;
