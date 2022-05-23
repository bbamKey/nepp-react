import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(
        (
          {
            actor,
            director,
            pubDate,
            subtitle,
            userRating,
            title,
            image,
            link,
            isbn,
          },
          i
        ) => (
          <Link to={`/book/${isbn.substring(11)}`} key={link}>
            <Item key={i}>
              <Thumbnail src={image} />
              <Title>{title.replace(/<[^>]*>?/g, "")}</Title>
            </Item>
          </Link>
        )
      )}
    </List>
  );
};

const List = styled.ul`
  padding: 10px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default BookList;
