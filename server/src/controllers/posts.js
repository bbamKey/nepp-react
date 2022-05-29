import conn from "../config/db.js";

export const getPosts = async (req, res) => {
  const selectQuery = `
      SELECT
        P.*
        , U.name
        , U.profile_image
        , GROUP_CONCAT(I.url) AS imageList
      FROM post P
        JOIN user U ON U.id = P.user_id
        JOIN image I ON I.post_id = P.id
      GROUP BY P.id
      ORDER BY P.created_at DESC
      LIMIT 15;
  `;

  const [rows] = await conn.query(selectQuery);

  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });

  return res.send(postList);
};
