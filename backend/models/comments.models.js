import mongoose, { Schema } from "mongoose";
const commentModel = new Schema({
    commentedby:{
         type:Schema.Types.ObjectId,
        ref:"user",
    },
    commentedon:{
         type:Schema.Types.ObjectId,
        ref:"user"
    },
    comment:{
     type:String,
    },

    post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
        required: true
      },
     
},{
    timestamps:true
})
 const comments=mongoose.model("comment",commentModel);
 export default comments;