import express from 'express';
import Post from './models/posts.models.js';

const delrouter = express.Router();


delrouter.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: 'Post deleted ' });
  } catch (error) {
    res.status(500).json({ error: 'Error ' });
  }
});

export default delrouter;
