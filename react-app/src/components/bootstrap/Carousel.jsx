import styled from "styled-components";

const Carousel = ({ data }) => {
  return (
    <Body>
      <Container>
        <List>
          {data.map(({ id, url }) => (
            <Image key={id} src={url} />
          ))}
        </List>
        <BtnPrev>이전</BtnPrev>
        <BtnNext>다음</BtnNext>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  margin: 40px;
`;

const Container = styled.div`
  width: 700px;
  height: 450px;
  position: relative;
`;
const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 700px;
  height: 450px;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnPrev = styled(Btn)`
  left: 20px;
`;
const BtnNext = styled(Btn)`
  right: 20px;
`;

export default Carousel;
