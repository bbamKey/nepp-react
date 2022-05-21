import styled from "styled-components";

const MovieList = ({ data }) => {
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
          },
          i
        ) => (
          <Item key={i}>
            <a href={link} target="_blank" rel="noreferrer">
              <Thumbnail src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
              {/* <Title>{title.replace(/<[^>]*>?/g, "")}</Title> */}
            </a>
          </Item>
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

export default MovieList;
