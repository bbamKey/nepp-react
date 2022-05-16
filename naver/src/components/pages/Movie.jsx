import styled from "styled-components";

const Movie = () => {
  return (
    <Layout>
      <h1>Movie</h1>
      <Form>
        <input />
        <button>검색</button>
      </Form>
      <List>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTBfMjkg%2FMDAxNjQ5NTc2MjU4MDY0.HQXcaGx0LbZxYhxWJ1TUAVqiZcXL1qYUy2jeTdjtRrkg.Qh1ycIMZdCnIup4u_HHOamrznh_p7GkrqAgYtHFvsY8g.JPEG.connell3%2F001n9vYZly1h13yo47m2qj60xc1ddkjl02.jpg&type=sc960_832" />
          <Title>제목</Title>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTBfMjkg%2FMDAxNjQ5NTc2MjU4MDY0.HQXcaGx0LbZxYhxWJ1TUAVqiZcXL1qYUy2jeTdjtRrkg.Qh1ycIMZdCnIup4u_HHOamrznh_p7GkrqAgYtHFvsY8g.JPEG.connell3%2F001n9vYZly1h13yo47m2qj60xc1ddkjl02.jpg&type=sc960_832" />
          <Title>제목</Title>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTBfMjkg%2FMDAxNjQ5NTc2MjU4MDY0.HQXcaGx0LbZxYhxWJ1TUAVqiZcXL1qYUy2jeTdjtRrkg.Qh1ycIMZdCnIup4u_HHOamrznh_p7GkrqAgYtHFvsY8g.JPEG.connell3%2F001n9vYZly1h13yo47m2qj60xc1ddkjl02.jpg&type=sc960_832" />
          <Title>제목</Title>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTBfMjkg%2FMDAxNjQ5NTc2MjU4MDY0.HQXcaGx0LbZxYhxWJ1TUAVqiZcXL1qYUy2jeTdjtRrkg.Qh1ycIMZdCnIup4u_HHOamrznh_p7GkrqAgYtHFvsY8g.JPEG.connell3%2F001n9vYZly1h13yo47m2qj60xc1ddkjl02.jpg&type=sc960_832" />
          <Title>제목</Title>
        </Item>
      </List>
    </Layout>
  );
};

const Layout = styled.div``;
const Form = styled.form``;
const List = styled.ul``;
const Item = styled.li``;
const Thumbnail = styled.img``;
const Title = styled.p``;

export default Movie;
