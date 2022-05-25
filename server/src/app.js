import express from "express";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev")); //로그
app.use(express.json()); //request body 인식
app.use(cors(["http://localhost:3000"])); //CORS 허용

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
