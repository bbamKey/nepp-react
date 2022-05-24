import conn from "../config/db.js";

export const posetUsers = async (req, res) => {
  // 1. user_name 중복검사. SELECT문으로 db에 겹치는 user_name이 있는지
  // 2. 비밀번호 암혹화 : salt(랜덤 값)와 평문으로 암호화된 비밀번호 생성
  // 3. user_name, name, password, salt를 db에 INSERT
  console.log(req.body);

  const [rows] = await conn.query(`SELECT * FROM user`);
  console.log(rows);

  res.send("users users users");
};
