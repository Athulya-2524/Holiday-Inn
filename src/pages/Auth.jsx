import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Auth({insideRegister = (false)}) {


  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/src/assets/mainHero.png')] bg-black px-4">
      {/* Card */}
      <div className="bg-black w-full max-w-md rounded-2xl from-[#15171c] to-[#0e0f13]
                      shadow-[0_0_10px_rgba(0,0,0,0.5)] p-8 text-white">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">
          
          {insideRegister? "Sign up to my Application":"Sign in to my Application"}
          </h2>
          <p className='text-sm text-gray-400 text-center mt-2'>
            {insideRegister? "Welcome!Sign up to continue":"Welcome!Sign in to continue"}
          </p>

        {/* Google Button */}
        <button className="mt-6 w-full flex items-center justify-center gap-3
          rounded-lg border border-gray-700 py-2.5
          hover:bg-[#1c1f26] transition">
          <FcGoogle size={20} />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Email */}
        <label className="text-sm text-gray-300">Username or Email</label>
        <input
          type="text"
          placeholder="Enter your username or email"
          className="mt-2 w-full rounded-lg bg-[#1c1f26] px-4 py-2.5
                     text-sm text-white placeholder-gray-500
                     outline-none focus:ring-2 focus:ring-white/20"
        />

        <label className="text-sm text-gray-300">Password</label>
        <input
          type="text"
          placeholder="Password"
          className="mt-2 w-full rounded-lg bg-[#1c1f26] px-4 py-2.5
          text-sm text-white placeholder-gray-500
          outline-none focus:ring-2 focus:ring-white/20"
        />

        {/* Continue Button */}
        <button className="mt-6 w-full rounded-lg bg-white py-2.5
         text-black font-medium hover:bg-gray-200 transition">
          Continue →
        </button>

        {/* Footer */}
          <div className="text-white">
      <h1 className="text-2xl font-bold text-center mb-4">
      </h1>

      {/* form fields here */}

      {insideRegister ? (
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      ) : (
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      )}
    </div>

      </div>
    </div>
  )
}

export default Auth

