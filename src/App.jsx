import { useState } from 'react'
import './App.css'

// Import Child Component
import CounterText from './components/CounterText.jsx'
import ButtonIncrement from './components/ButtonIncrement.jsx'
import ButtonDecrement from './components/ButtonDecrement.jsx'

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
        <ButtonIncrement incrementCount={incrementCount}/>
          <CounterText count={count}/>
        <ButtonDecrement decrementCount={decrementCount}/>
        </div>
      </div>
    </>
  )
}

export default App
