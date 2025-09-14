import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md gap-4 px-4 py-3 flex flex-row md:flex-row-reverse items-center justify-between gap-x-8">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Alx</div>

      {/* Search Bar */}
      <div className="w-full md:w-1/3 mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search destination..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex flex-row items-center space-x-4 mt-3 md:mt-0 gap-4">
        <button className="text-gray-700">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
