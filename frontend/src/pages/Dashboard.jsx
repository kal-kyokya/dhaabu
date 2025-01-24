import React from "react";
import { FaArrowLeft, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Dhaabu = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 shadow-5xl  w-full">
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
          <button className="block w-full mb-2 text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaArrowLeft /> <span>Go Back</span>
          </button>
          <button className="block w-full text-yellow-400 hover:text-yellow-500 flex items-center space-x-2">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="flex-1 px-2">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 bg-white px-2 rounded-lg shadow">
          {/* Search Bar */}
          <div className="relative flex-grow mx-4 my-2">
            <input
                type="text"
                placeholder="Search Dhaabu..."
                className="w-full max-w-5xl px-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none"
            />
            </div>

          {/* Icons and Profile */}
          <div className="flex items-center space-x-8">
            {/* Notification Icon */}
            <button className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
            <svg class="h-6 w-6 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
            </button>

            {/* Create Post Button */}
            <button className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
            <svg class="h-6 w-6 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>

            {/* User Profile */}
            <button className="p-2 bg-blue-900 text-gray-800 rounded-full hover:bg-blue-800">
            <svg class="h-6 w-6 text-gray-100"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

            </button>
          </div>
        </div>

       {/* Timeline */}
       <div>
          {/* Post 1 */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">What are the key traditions of the Yoruba people?</h2>
            <p className="text-gray-600 mb-4">Explore the rich cultural heritage of the Yoruba people, their festivals, and unique practices.</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="text-gray-700 hover:text-yellow-400">1.2K Upvotes</button>
                <button className="text-gray-700 hover:text-yellow-400">300 Comments</button>
              </div>
              <button className="text-gray-700 hover:text-yellow-400">Share</button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">What are the origins of African drumming?</h2>
            <p className="text-gray-600 mb-4">Dive into the rhythms that shaped African music and its global influence.</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="text-gray-700 hover:text-yellow-400">1.5K Upvotes</button>
                <button className="text-gray-700 hover:text-yellow-400">420 Comments</button>
              </div>
              <button className="text-gray-700 hover:text-yellow-400">Share</button>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">How is Kente cloth made?</h2>
            <p className="text-gray-600 mb-4">Unveil the craftsmanship behind the vibrant and symbolic Kente cloth.</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="text-gray-700 hover:text-yellow-400">800 Upvotes</button>
                <button className="text-gray-700 hover:text-yellow-400">150 Comments</button>
              </div>
              <button className="text-gray-700 hover:text-yellow-400">Share</button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4 border-l">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Questions</h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block text-gray-700 hover:text-yellow-400">
              What are the origins of African drumming?
            </a>
            <span className="text-sm text-gray-500">512 upvotes - 120 comments</span>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-yellow-400">
              How is Kente cloth made?
            </a>
            <span className="text-sm text-gray-500">230 upvotes - 89 comments</span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Dhaabu;