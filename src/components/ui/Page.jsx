import React from 'react';

const Page = ({ isLogin }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isLogin ? "Welcome, User!" : "Not logged in"}
      </h1>
      <p className="text-gray-600">
        {isLogin
          ? "You have successfully logged in. Enjoy your experience!"
          : "Please log in to access the content."}
      </p>
    </div>
  );
};

export default Page;
