import { Router } from "express";

import { posetUsers, posetUsersToken } from "../controllers/users.js";

const router = Router();

router.post("/", posetUsers);
router.post("/token", posetUsersToken);

export default router;
