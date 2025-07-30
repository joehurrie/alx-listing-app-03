import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">StaySavvy</div>

      {/* Search Bar */}
      <div className="w-full md:w-1/3 mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search destination..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4 mt-3 md:mt-0">
        <button className="text-gray-700">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
