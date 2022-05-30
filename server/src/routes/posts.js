import { Router } from "express";
import { upload } from "../config/aws.js";
import { getPosts, postPosts } from "../controllers/posts.js";

const router = Router();

router.get("/", getPosts);
router.post("/", upload.single("file"), postPosts);

export default router;
