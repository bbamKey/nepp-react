import styled from "styled-components";

const CarouselListOpacity = ({ data, activeIndex }) => {
  return (
    <List>
      {data.map(({ id, url }, i) => (
        <Image key={id} src={url} isActive={activeIndex === i} />
      ))}
    </List>
  );
};

const List = styled.div``;

const Image = styled.img`
  position: absolute;
  width: 700px;
  height: 450px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default CarouselListOpacity;
