import { useReducer } from 'react'

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducerCount = (state, action) => {
    switch(action.type){
        case ACTION.INCREMENT:
            return {count: state.count + action.payload}
        case ACTION.DECREMENT:
            return {count: state.count + action.payload}
    }
}

function App() {

    const [state, dispatch] = useReducer(reducerCount, {count: 0})

    const incrementCount = () => {
        dispatch({type: ACTION.INCREMENT, payload: 1})
    }

    const decrementCount = () => {
        dispatch({type: ACTION.DECREMENT, payload: -1})
    }
  
    return (
      <>
        <div className='bg-slate-900 h-full flex flex-col gap-5 items-center justify-center text-xl font-bold text-center'>
        <h1 className='text-white text-4xl'>Count</h1>
          <div className='flex flex-row gap-12 justify-center text-neutral-200'>
          <button className='bg-blue-800 rounded-md p-2' onClick={incrementCount}>Increment</button>
          <h1 className='text-white text-4xl'>{ state.count }</h1>
          <button className='bg-red-800 rounded-md p-2' onClick={decrementCount}>Decrement</button>
          </div>
        </div>
      </>
    )
  }
  
  export default App