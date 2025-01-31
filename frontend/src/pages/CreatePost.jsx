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
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is present
        },
        body: JSON.stringify({ title: postTitle, content: postContent }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Post created:", data);
        alert("Post created successfully!");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        console.error("Error creating post:", data.error);
        alert(`Error: ${data.error}`);
      }
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

        {/* Tabs */}
        <div className="flex space-x-4 border-b mb-6">
          <button className="pb-2 text-blue-500 border-b-2 border-blue-500">Text</button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">Images & Video</button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">Link</button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">Poll</button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={createPost}>
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
              maxLength={300}
            />
            <p className="text-sm text-gray-400 mt-1 text-right">{postTitle.length}/300</p>
          </div>

          {/* Body Input */}
          <div>
            <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">Body</label>
            <textarea
              id="body"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the post content"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
