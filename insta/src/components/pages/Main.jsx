import styled from "styled-components";
import PostList from "../templates/main/PostList";

const Main = () => {
  return (
    <Layout>
      <Center>
        <Left>
          <PostList />
        </Left>
        <Right></Right>
      </Center>
    </Layout>
  );
};

const Layout = styled.div`
  background: #fafafa;
`;
const Center = styled.main`
  max-width: 820px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  max-width: 470px;
`;

const Right = styled.div`
  width: 320px;
  margin-left: 32px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default Main;
