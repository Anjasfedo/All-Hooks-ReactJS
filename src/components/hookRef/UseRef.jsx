import { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const increment = () => {
    setCount((count) => count + 1);

    countRef.current++;

    console.log(count);
    console.log(countRef)
  };

  const decrement = () => {
    // setCount((count) => count - 1);

    countRef.current--;
    console.log(count);
    console.log(countRef)
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{countRef.current}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseRef;
