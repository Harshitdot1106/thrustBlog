import express from 'express';
import posts from "../models/posts.models.js";
const newpostRouter= express.Router();
newpostRouter.post('/newpost',async(req,res)=>{
    try{
    const {title,author,body}=req.body
    const NewPost=new posts({title,author,body})
        await NewPost.save();
        res.status(201).json(NewPost)
        console.log(NewPost)
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create post', error });
      }
})
export default newpostRouter;