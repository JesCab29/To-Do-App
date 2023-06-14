import { AddTodo } from './AddTodo'
import './App.css'
import { TodoItem } from './TodoItem'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([])

  const getItem = (item) => {
    setTodo((prevState) => {
      const updatedTodo = [...prevState, item]
      updatedTodo.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    return updatedTodo;
    })
  }

  const getCompleted = (id) => {
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="todo">
      <h2 className='titulo'>To-Do List</h2>
      <AddTodo item={getItem}/>
      {todo && todo.map((todo, index) => (
        <TodoItem key={index} id={index} item={todo} completed={getCompleted}/>
      ))}
    </div>
  );
}

export default App
