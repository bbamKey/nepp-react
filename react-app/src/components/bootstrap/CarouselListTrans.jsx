import styled from "styled-components";

const CarouselListTrans = ({ data, activeIndex }) => {
  return (
    <List activeIndex={activeIndex}>
      {data.map(({ id, url }, i) => (
        <Image key={id} src={url} />
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  transform: ${({ activeIndex }) => `translateX(${-700 * activeIndex}px)`};
  transition: transform 1s;
`;
const Image = styled.img`
  width: 700px;
  height: 450px;
  min-width: 700px;
`;

export default CarouselListTrans;
