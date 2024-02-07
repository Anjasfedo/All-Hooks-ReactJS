import { useState, forwardRef, useImperativeHandle } from "react";

const ChildImperative = forwardRef((props, ref) => {
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => {
    setisLogin((prev) => !prev);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleLogin
    })
  )

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={handleLogin}
            className={`${!isLogin ? "login" : "logout"}`}
          >
            {!isLogin ? "login" : "logout"}
          </button>
        </li>
      </ul>
    </div>
  );
});

ChildImperative.displayName = "ChildImperative"

export default ChildImperative;
