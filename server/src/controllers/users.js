import conn from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/jwt.js";

export const posetUsers = async (req, res) => {
  // 1. user_name 중복검사. SELECT문으로 db에 겹치는 user_name이 있는지
  // 2. 비밀번호 암호화 : salt(랜덤 값)와 평문으로 암호화된 비밀번호 생성
  // 3. user_name, name, password, salt를 db에 INSERT

  const { name, user_name, password } = req.body;

  // 아이디 중복 검사 S
  const selectQuery = `
      SELECT id FROM user 
      WHERE user_name = '${user_name}';
  `;

  const [rows] = await conn.query(selectQuery);

  if (rows.length > 0) {
    return sendResponse(res, 409, "중복되는 아이디가 있습니다.");
  }
  // 아이디 중복 검사 E

  // 패스워드 암호화 S
  const { hashedPW, salt } = await encryptPassword(password);
  // 패스워드 암호화 E

  // DB 적재 S
  const insertQuery = `
    INSERT INTO 
      user(user_name, password, salt, name)
      VALUES (?, ?, ?, ?)
  `;
  await conn.query(insertQuery, [user_name, hashedPW, salt, name]);
  // DB 적재 E

  return res.send({ success: true });
};

export const posetUsersToken = async (req, res) => {
  // 1. DB에 동일 한 user_name이 있는지 체크
  // 2. user_name과 암호화된 password로 SELECT
  // 3. 토큰 발급

  const { user_name, password } = req.body;
  // 아이디 존재 여부 검사 S
  const selectQuery = `
      SELECT id, password, salt  FROM user 
      WHERE user_name = ?;
  `;
  const [users] = await conn.query(selectQuery, [user_name]);
  if (users.length === 0) {
    return sendResponse(res, 401, "존재하지 않는 사용자 이름입니다.");
  }
  // 아이디 존재 여부 검사 E

  // 패스워드 암호화하여 일치하는지 체크 S
  const user = users[0];

  const { hashedPW } = await encryptPassword(password, user.salt);
  if (user.password !== hashedPW) {
    return sendResponse(res, 401, "비밀번호가 일치하지 않습니다.");
  }
  // 패스워드 암호화하여 일치하는지 체크 E

  // 토큰 발급 S
  const payload = {
    userId: user.id,
  };
  const option = {
    expiresIn: "10s",
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, option);
  // 토큰 발급 E

  res.send({ success: true, token });
};

// salt 발급 및 패스워드 암호화
const encryptPassword = async (password, p_salt) => {
  let salt = p_salt ? p_salt : await bcrypt.genSalt();

  const hashedPW = await bcrypt.hash(password, salt);

  return { hashedPW, salt };
};

const sendResponse = (res, code, message) => {
  let flag = true;
  if (code !== "200") flag = false;

  res.status(code).send({ success: flag, message });
};

const queryExec = async (type, data) => {
  if (type === "selectUser") {
    const selectUser = `
        SELECT * FROM user 
        WHERE user_name = ?;
    `;
    const [rows] = await conn.query(selectUser, data);
    if (rows.length > 0) return [rows];
  } else if (type === "insertUser") {
    // DB 적재 S
    const insertQuery = `
      INSERT INTO user(user_name, password, salt, name)
      VALUES (?, ?, ?, ?)
    `;
    await conn.query(insertQuery, data);
  }
};
