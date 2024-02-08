import { useCallback, useState } from "react";
import List from "../ui/List";

const UseCallback = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);

  console.log("Parent component rerendered");

  const handler = useCallback(
    (event) => {
      console.log("You click ", event.currentTarget);
    },
    [dep]
  );

  const stateHandler = () => {
    setState((state) => !state);
  };

  return (
    <div>
      <button onClick={stateHandler}>Changee state of parent component</button>
      <List handler={handler} />
      <button onClick={() => setDep((dep) => !dep)}>Change dependency</button>
    </div>
  );
};

export default UseCallback;
