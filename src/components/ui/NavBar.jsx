import React from "react";

const NavBar = ({ isLogin, handleLogin }) => {
  return (
    <div className="bg-blue-500 p-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        {isLogin ? "Welcome!" : "Not Logged In"}
      </h1>
      <button
        onClick={handleLogin}
        className="bg-white text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-300 hover:text-white"
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default NavBar;
