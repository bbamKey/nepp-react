import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CarouselListOpacity from "./CarouselListOpacity";
import CarouselListTrans from "./CarouselListTrans";

const Carousel = ({ data, type }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flag, setFlag] = useState(true);

  const onChange = useCallback(
    (i) => {
      if (!flag) return;

      const firstIndex = 0;
      const lastIndex = data.length - 1;

      let nextIndex = activeIndex + i;
      if (nextIndex > lastIndex) {
        nextIndex = firstIndex;
      } else if (nextIndex < 0) {
        nextIndex = lastIndex;
      }
      console.log(nextIndex);
      setActiveIndex(nextIndex);
      setFlag(true);
    },
    [activeIndex, flag]
  );

  useEffect(() => {
    setFlag(false);
    setTimeout(() => {
      setFlag(true);
    }, 500);
  }, [activeIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(1);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [onChange]);

  return (
    <Body>
      <Container>
        {
          {
            opacity: (
              <CarouselListOpacity data={data} activeIndex={activeIndex} />
            ),
            trans: <CarouselListTrans data={data} activeIndex={activeIndex} />,
          }[type]
        }
        <BtnPrev onClick={() => onChange(-1)}>이전</BtnPrev>
        <BtnNext onClick={() => onChange(1)}>다음</BtnNext>
        <NavigationList>
          {data.map(({ id, url }, i) => (
            <Navigation
              key={id}
              onClick={() => setActiveIndex(i)}
              isActive={activeIndex === i}
            >
              {i + 1}
            </Navigation>
          ))}
        </NavigationList>
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
  overflow: hidden;
`;

const Btn = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
  font-size: 0px;
`;
const BtnPrev = styled(Btn)`
  left: 20px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E");
`;
const BtnNext = styled(Btn)`
  right: 20px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

const NavigationList = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const Navigation = styled.button`
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.6s ease;
`;

export default Carousel;
