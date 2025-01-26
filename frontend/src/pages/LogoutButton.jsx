import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        You have been logged out.
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for using Dhaabu. We hope to see you again soon!
      </p>

      {/* Redirect Link */}
      <Link
        to="/login"
        className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
      >
        Go to Login Page
      </Link>
    </div>
  );
};

export default LoggedOut;