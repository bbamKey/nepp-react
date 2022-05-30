import jwt from "jsonwebtoken";
import conn from "../config/db.js";
import { JWT_SECRET_KEY } from "../config/jwt.js";

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

export const postPosts = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { userId } = jwt.verify(token, JWT_SECRET_KEY);
    const { content } = req.body;

    const file = req.file.location;

    const insertQuery = `
      insert into post(user_id, content)
      values (${userId}, "${content}");
    `;

    const [newPost] = await conn.query(insertQuery);
    const postId = newPost.insertId;

    const insertQuery2 = `
      insert into image (post_id, url)
      values (${postId}, "${file}");
    `;
    await conn.query(insertQuery2);

    res.send({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(401).send({ success: false });
  }
};
