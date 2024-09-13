import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home'; 
import NewPost from './NewPost'; 
//import EditPost from './EditPosts'; 
import Posts from './Posts'; 
import About from './About'; 
import Footer from './Footer'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
        { /* <Route path="/edit/:id" element={<EditPost />} /> */}
          <Route path="/post/:id" element={<Posts />} />
          <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
