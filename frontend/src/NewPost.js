import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './newPost.css'; // Import the CSS file

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newpost', {
        title,
        body,
        author,
      });
      navigate('/home');
    } catch (err) {
      console.log("the error is ", err);
    }
  }

  return (
    <div className="new-post-container">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input 
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Body</label>
        <input 
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewPost;
