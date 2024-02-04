import { createContext, useState } from "react";
import NavBar from "../ui/NavBar";
import Page from "../ui/Page";

export const LoginContext = createContext();

const UseContext = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <LoginContext.Provider value={[isLogin, handleLogin]}>
      <div className="bg-gray-100 min-h-screen">
        <NavBar />
        <div className="container mx-auto p-4">
          <Page />
        </div>
      </div>
    </LoginContext.Provider>
  );
};

export default UseContext;
