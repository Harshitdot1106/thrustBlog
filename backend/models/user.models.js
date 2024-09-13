import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  bio: {
    type: String,
  },
  profilephoto: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  }
}, {
  timestamps: true, 
});

const User = mongoose.model("User", userSchema);
export default User;
