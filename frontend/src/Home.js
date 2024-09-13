import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts.js';
import './Home.css'; 
import { useNavigate } from 'react-router';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.log(err, "fetching not possible");
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      console.log(err, "deletion not possible");
    }
  };

  return (
    <div className="home-container">
      {posts.length ? (
        <div className="posts-container">
          {posts.map(item => (
            <div key={item._id} className="post-card">
              <Posts item={item} />
              <button
                className="delete-post-button"
                onClick={() => handleDelete(item._id)}
              >
                Delete Post
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="create-post-message">
          <p>No posts available. Create new posts!</p>
        </div>
      )}
      <button 
        className="create-post-button"
        onClick={() => navigate('/newpost')}
      >
        Create Post
      </button>
    </div>
  );
}

export default Home;
