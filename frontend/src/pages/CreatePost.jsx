import React from "react";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa"; // Importing icons

const CreatePostPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 shadow-5xl w-full">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Dhaabu</h2>
          <nav>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Profile
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            <h3 className="text-sm font-bold text-yellow-400">COMMUNITY</h3>
            <a href="#" className="block mt-2 hover:underline">
              Create a new topic
            </a>
          </div>
        </div>
        <div>
          <button className="block w-full mb-2 text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaArrowLeft /> <span>Go Back</span>
          </button>
          <button className="block w-full text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Create post</h1>
          <p className="text-gray-500">Drafts</p>
        </header>

        {/* Tabs */}
        <div className="flex space-x-4 border-b mb-6">
          <button className="pb-2 text-blue-500 border-b-2 border-blue-500">
            Text
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">
            Images & Video
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">Link</button>
          <button className="pb-2 text-gray-500 hover:text-blue-500">Poll</button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
              maxLength={300}
            />
            <p className="text-sm text-gray-400 mt-1 text-right">0/300</p>
          </div>

          {/* Body Input */}
          <div>
            <label
              htmlFor="body"
              className="block text-gray-700 font-semibold mb-2"
            >
              Body
            </label>
            <textarea
              id="body"
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
