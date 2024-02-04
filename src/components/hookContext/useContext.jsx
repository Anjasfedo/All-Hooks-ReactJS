import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import Page from "../ui/Page";

const useContext = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar isLogin={isLogin} handleLogin={handleLogin} />
      <div className="container mx-auto p-4">
        <Page isLogin={isLogin} />
      </div>
    </div>
  );
};

export default useContext;
