import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile"; // Import Profile page
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen animate-gradient-x bg-gradient-to-r from-blue-500 via-white to-yellow-500">
        <main role="main">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <div
                  className="flex justify-center items-center min-h-screen bg-cover bg-center"
                  aria-labelledby="welcome-section"
                  role="region"
                >
                  <div
                    className="text-center bg-opacity-30 bg-white p-8 rounded-lg shadow-5xl max-w-2xl w-full"
                    id="welcome-section"
                  >
                    <h1
                      className="text-5xl sm:text-6xl font-extrabold text-yellow-400 mb-6"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Dhaabu
                    </h1>
                    <p
                      className="text-1xl sm:text-3xl text-gray-800 mb-8"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Connecting Africans
                    </p>
                    <div className="flex justify-center gap-9 mb-6 flex-wrap">
                      <Link to="/login">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-lg">
                          Log In
                        </button>
                      </Link>
                      <Link to="/signup">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-lg">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                    <div className="mt-8">
                      <Link to="/dashboard">
                        <button className="px-8 py-4 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-all font-bold shadow-lg">
                          Let's Go!
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Other Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile" element={<Profile />} /> {/* Profile Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
