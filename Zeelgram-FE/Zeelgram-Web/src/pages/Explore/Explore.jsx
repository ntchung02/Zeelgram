import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./Explore.scss";// Assuming you have a CSS file for Explore page styles

const ExplorePage = () => {
  // Sample data for posts
  const posts = [
    { id: 1, imageUrl: "post1.jpg" },
    { id: 2, imageUrl: "post2.jpg" },
    { id: 3, imageUrl: "post3.jpg" },
    // Add more posts here...
  ];

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore</h1>
      </div>
      <div className="explore-grid">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="post-link">
            <img src={post.imageUrl} alt="Post" className="post-image" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
