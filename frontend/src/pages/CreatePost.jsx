import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  // Handle form submission
  async function createPost(e) {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("http://localhost:5000/newPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`, // Handle missing token safely
        },
        body: JSON.stringify({ title: postTitle, content: postContent }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }

      const data = await response.json();
      console.log("Post created:", data);
      alert("Post created successfully!");
      navigate("/dashboard"); // Redirect to dashboard after post is created
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  }

  // Handle logout function
  const handleLogout = () => {
    alert("Logged out!");
    localStorage.removeItem("token"); // Clear token
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 shadow-5xl w-full">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Dhaabu</h2>
          <nav>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Questions</a></li>
              <li><a href="#" className="hover:underline">Discover</a></li>
              <li><a href="#" className="hover:underline">My Profile</a></li>
            </ul>
          </nav>
          <div className="mt-8">
            <h3 className="text-sm font-bold text-yellow-400">COMMUNITY</h3>
            <a href="#" className="block mt-2 hover:underline">Create a new topic</a>
          </div>
        </div>
        <div>
          {/* Go Back Button */}
          <button onClick={() => navigate(-1)} className="block w-full mb-2 text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaArrowLeft /> <span>Go Back</span>
          </button>

          {/* Logout Button */}
          <button onClick={handleLogout} className="block w-full text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create Post</h1>
          <p className="text-gray-500">Drafts</p>
        </header>

        {/* Post Form */}
        <form onSubmit={createPost} className="space-y-4">
          <div>
            <label htmlFor="postTitle" className="block text-gray-700 font-medium">Post Title</label>
            <input
              type="text"
              id="postTitle"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="postContent" className="block text-gray-700 font-medium">Post Content</label>
            <textarea
              id="postContent"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your post content here"
              rows="5"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreatePostPage;
