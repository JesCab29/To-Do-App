
import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {
  const [item, setItem] = useState("")

  const handleChange = (e) => {
    setItem(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.item(item)
    setItem('')
  };
  
  return (
    <form method='post' onSubmit={handleSubmit}>
      <input type="text" name="item" value={item} onChange={handleChange} placeholder="Añade una tarea" />
      <button type="submit">Añadir</button>
    </form>
  )
};
