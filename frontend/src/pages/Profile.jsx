import React from "react";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom

const Profile = () => {
  const navigate = useNavigate(); // Define navigate for Go Back functionality

  const handleLogout = () => {
    // Handle logout logic here, like clearing the token and redirecting to the login page
    localStorage.removeItem("token"); // Example of removing token from localStorage
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white p-4 flex flex-col justify-between min-h-screen">
        <div>
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Dhaabu</h2>
          <nav>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Questions</a></li>
              <li><a href="#" className="hover:underline">Discover</a></li>
            </ul>
          </nav>
          <div className="mt-8">
            <h3 className="text-sm font-bold text-yellow-400">COMMUNITY</h3>
            <a href="#" className="block mt-2 hover:underline">Create a new topic</a>
          </div>
        </div>
        <div>
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)} // Go back
            className="block w-full mb-2 text-yellow-400 hover:text-yellow-500 flex items-center space-x-2"
          >
            <FaArrowLeft /> <span>Go Back</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout} // Logout
            className="block w-full text-yellow-400 hover:text-yellow-500 flex items-center space-x-2"
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Profile Content */}
      <main className="w-4/5 p-8 flex-grow">
        <div className="bg-white rounded shadow p-6">
          <div className="flex items-center space-x-6">
            {/* Placeholder for Profile Picture */}
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              Image
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-500">Joined: January 2023</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-bold">Email</p>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>

          <div className="mt-6">
            <p className="font-bold">Bio</p>
            <p className="text-gray-600">
              Software developer with a passion for building user-friendly
              applications.
            </p>
          </div>

          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
