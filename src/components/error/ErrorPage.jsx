import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-red-100 px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed or does not exist.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-5 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Go Home
          </Link>

          
        </div>

        <div className="mt-6 text-sm text-gray-400">
          Error Code: 404 | Something went wrong
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;