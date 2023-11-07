import { useState } from 'react'

function App() {
    // Initiate variabel count with useState
    const [count, setCount] = useState(0)
  
    // Method to incraise value of count by 1
    const incrementCount = () => {
      setCount(count => count + 1)
    }
  
    // Method to decraise value of count by 1
    const decrementCount = () => {
      setCount(count => count - 1)
    }
  
    return (
      <>
        <div className='bg-slate-900 h-full flex flex-col gap-5 items-center justify-center text-xl font-bold text-center'>
        <h1 className='text-white text-4xl'>Count</h1>
          <div className='flex flex-row gap-12 justify-center text-neutral-200'>
          <button className='bg-blue-800 rounded-md p-2' onClick={incrementCount}>Increment</button>
          <h1 className='text-white text-4xl'>{ count }</h1>
          <button className='bg-red-800 rounded-md p-2' onClick={decrementCount}>Decrement</button>
          </div>
        </div>
      </>
    )
  }
  
  export default App