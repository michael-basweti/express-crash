import { Router } from "express";
const router = Router();
import {
  createPost,
  editPost,
  deletePost,
  getPosts,
  getSinglePost,
} from "../controllers/postController.js";

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getSinglePost);

// create new post

router.post("/", createPost);

// put request
router.put("/:id", editPost);

// delete request
router.delete("/:id", deletePost);

export default router;
