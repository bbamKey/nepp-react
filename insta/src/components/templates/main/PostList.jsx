import { useEffect, useState } from "react";
import styled from "styled-components";

import { getPosts } from "../../../apis/post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const result = await getPosts();
    setPosts(result);
  };

  return (
    <List>
      {posts.map(({ id, content, imageList }, j) => (
        <Item key={j}>
          <Header></Header>
          <ImageList>
            {imageList.map((image, i) => (
              <Image key={i} src={image} />
            ))}
          </ImageList>
          <Content>{content}</Content>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fff;
  margin: 20px 0;
`;
const Header = styled.div`
  height: 58px;
`;
const ImageList = styled.div``;
const Image = styled.img`
  width: 470px;
  height: 470px;
`;
const Content = styled.div`
  padding: 20px;
`;

export default PostList;
