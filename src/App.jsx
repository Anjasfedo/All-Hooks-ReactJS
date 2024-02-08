import "./App.css";

// Import Child Component

// Hook State
// useState
import UseState from "./components/hookState/UseState";
// useReducer
import UseReducer from "./components/hookState/UseReducer";

// Hook Effect
// useEffect
import UseEffect from "./components/hookEffect/useEffect";
// useLayoutEffect
import UseLayoutEffect from "./components/hookEffect/useLayoutEffect";
// useInsertionEffect
import UseInsertionEffect from "./components/hookEffect/useInsertionEffect";

// Hook Context
import UseContext from "./components/hookContext/useContext";

// Hook Ref
import UseRef from "./components/hookRef/UseRef";
import UseImperativeHandle from "./components/hookRef/UseImperativeHandle";

// Hook Performance
import UseMemo from "./components/hookPerformance/UseMemo";
import UseCallback from "./components/hookPerformance/UseCallback";

function App() {
  return (
    <>
      <UseCallback />
    </>
  );
}

export default App;
