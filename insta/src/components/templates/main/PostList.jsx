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
      {posts.map(({ imageList }) => (
        <Item>
          <Header></Header>
          <ImageList>
            {imageList.map((image) => (
              <Image src={image} />
            ))}
          </ImageList>
          <Content></Content>
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
