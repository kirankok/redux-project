import React from 'react'
import TodoTask from '../Todo/TodoTask';
import { useSelector } from 'react-redux';

const TodoList = () => {

  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {
        todos?.map((item, i) => {
          return <TodoTask {...item} key={i} />
        })
      }
    </div>
  )
}

export default TodoList