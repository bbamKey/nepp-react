import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "nepp-insta.co4gfm17ihoe.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "12341234",
  database: "insta",
});

export default conn.promise();
