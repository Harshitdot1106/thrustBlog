import mongoose, { Schema } from "mongoose";
import  comments  from "./comments.models.js";
const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comments:[{
        type:Schema.Types.ObjectId,
        ref:"comment"
    }]},
    {
        timestamps:true
    }
)
const posts=mongoose.model("posts",postSchema);
export default posts;