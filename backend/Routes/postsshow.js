import post from "../models/posts.models.js";
import express, { Router } from 'express';
const postsrouter = express.Router();
postsrouter.get('/posts', async (req, res) => {
    const posts = await post.find(); 
    res.json(posts);
});
export default postsrouter;