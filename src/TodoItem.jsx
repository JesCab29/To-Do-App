import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      <input className='check' type="checkbox" onChange={() => props.completed(props.id)} />
      <p>{props.item}</p>
    </div>
  )
}
