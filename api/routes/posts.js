import express from "express";
import {getPosts,newPost,deletePost} from "../controllers/post.js"

const router = express.Router();

router.get("/",getPosts);
router.post("/",newPost);
router.delete("/:id", deletePost);
export default router;