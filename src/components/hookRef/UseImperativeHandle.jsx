import { useRef } from "react";
import ChildImperative from "./ChildImperative";

const UseImperativeHandle = () => {

  const loginRef = useRef()

  return (
    <div className="imperative">
      <ChildImperative ref={loginRef} />
      <p>Parent component</p>
      <button onClick={() => loginRef.current.handleLogin()}>Login from parent</button>
    </div>
  );
};

export default UseImperativeHandle;
