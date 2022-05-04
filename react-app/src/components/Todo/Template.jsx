import styled from "styled-components";
import Header from "./Header";
import Insert from "./Insert";
import Content from "./Content";

const Template = () => {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <Insert />
          {/* <Content /> */}
        </Container>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  background: #333;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 50vw;
`;

export default Template;
