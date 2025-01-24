import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen animate-gradient-x bg-gradient-to-r from-blue-500 via-white to-yellow-500">
        <main
          className="flex justify-center items-center min-h-screen bg-cover bg-center"
          role="main"
        >
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="text-center bg-opacity-30 bg-white p-8 rounded-lg shadow-5xl max-w-2xl w-full"
                  aria-labelledby="welcome-heading"
                  role="region"
                >
                  <h1
                    id="welcome-heading"
                    className="text-5xl sm:text-6xl font-extrabold text-yellow-400 mb-6"
                    style={{ fontFamily: "'Ubuntu', sans-serif" }}
                  >
                    Dhaabu
                  </h1>
                  <p
                    className="text-1xl sm:text-3xl text-gray-800 mb-8"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    aria-describedby="intro-text"
                  >
                    Connecting Africans Across Africa
                  </p>
                  <div className="flex justify-center gap-9 mb-6 flex-wrap">
                    <Link to="/login" aria-label="Log in to your account">
                      <button
                        className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-lg w-full sm:w-auto"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                        aria-label="Log In"
                      >
                        Log In
                      </button>
                    </Link>
                    <Link to="/signup" aria-label="Sign up for a new account">
                      <button
                        className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-lg w-full sm:w-auto"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                  <div className="mt-8">
                    <Link to="/dashboard" aria-label="Enter the main page">
                      <button
                        className="px-8 py-4 sm:px-10 sm:py-5 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-all font-bold shadow-lg w-full sm:w-auto"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                        aria-label="Let's Go to Dashboard"
                      >
                        Let's Go!
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
