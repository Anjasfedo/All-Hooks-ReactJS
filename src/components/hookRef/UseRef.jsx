import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const focus = () => {
    console.log(inputRef.current.className)
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" className="anjas" ref={inputRef} />

      <button onClick={focus}>fokus</button>
    </div>
  );
};

export default UseRef;
