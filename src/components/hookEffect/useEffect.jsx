import { useState, useEffect } from 'react'

function App() {
    // Initiate variabel todos with useState
    const [todos, setTodos] = useState([])

    // fetch data todos from jsonplaceholder with useEffect
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
    }, []); // use empty array as dependency, so useEffect only run once at first render

    return (
      <>
        <div className='bg-slate-900 h-fit flex flex-col gap-5 items-center justify-center text-xl font-bold text-center py-8'>
        <h1 className='text-white text-4xl'>To Do List</h1>
          <div className='flex flex-row gap-12 justify-center text-neutral-200'>
          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Todo</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
            {/* use map method in array to show data in td tag */}
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed ? 'Done' : 'Not Yet'}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </>
    )
  }
  
  export default App