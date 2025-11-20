import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">PitchCraft</h1>
      <p className="mt-3 text-gray-600 text-center">
        Your AI Startup Partner 
      </p>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Log In
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
