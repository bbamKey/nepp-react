import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookdetail } from "../../../apis";

const Bookdetail = () => {
  const { isbn } = useParams();
  const [
    {
      title,
      decription,
      author,
      discount,
      image,
      link,
      price,
      pubdate,
      publisher,
    },
    setInfo,
  ] = useState({});

  // author: "김민준"
  // description: "본문과 소스 전면 업그레이드!\n  기본기를 꼼꼼하게! 실전에서 효과적으로 활용하는 방법까지 알차게 배우자!\n본문과 소스 전면 업그레이드!\n  기본기를 꼼꼼하게! 실전에서 효과적으로 활용하는 방법까지 알차게 배우자!\n&lt;리액트를 다루는 기술&gt; 개정판이 나왔습니다. 리액트 16.8 버전에 Hooks라는 기능이... "
  // discount: "37800"
  // image: "https://bookthumb-phinf.pstatic.net/cover/153/727/15372757.jpg?type=m1&udate=20220112"
  // isbn: "1160508798 9791160508796"
  // link: "http://book.naver.com/bookdb/book_detail.php?bid=15372757"
  // price: "42000"
  // pubdate: "20190831"
  // publisher: "길벗"
  // title: "리액트를

  useEffect(() => {
    console.log("useEffect", isbn);
    refreshData();
  }, []);

  const refreshData = async () => {
    const result = await getBookdetail({ d_isbn: isbn });
    setInfo(result.items[0]);
  };

  return (
    <>
      <Container>
        <Image src={image}></Image>
        <h2>{title}</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 40%;
`;

export default Bookdetail;
