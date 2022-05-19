import styled from "styled-components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TopNav = () => {
  //   const { pathname } = useLocation();
  //   const [isShow, setIsShow] = useState(false);

  //   useEffect(() => {
  //     const isTopNav = pathname === "/";
  //     setIsShow(isTopNav);
  //   }, [pathname]);

  //   if (!isShow) return <></>;

  return (
    <>
      <Container>
        <LinkList>
          <Link to="/">
            <BtnLink>메인</BtnLink>
          </Link>
          <Link to="/movie">
            <BtnLink>영화</BtnLink>
          </Link>
          <Link to="/book">
            <BtnLink>책</BtnLink>
          </Link>
        </LinkList>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #ddd;
  height: 60px;
`;

const LinkList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const BtnLink = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      color: #fff;
      background-color: #000;
    }
  }
`;

export default TopNav;
