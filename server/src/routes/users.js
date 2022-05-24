import { Router } from "express";

import { posetUsers } from "../controllers/users.js";

const router = Router();

router.post("/", posetUsers);

export default router;
