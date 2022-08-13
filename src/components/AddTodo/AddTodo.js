import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todosActions';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch()

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <div>
        <div>
          <label>Name</label>
          <input type={'text'} value={task} onChange={handleTask} />
        </div>
        <div>
          <label>Description</label>
          <input type={'text'} value={description} onChange={handleDescription} />
        </div>
        <div>
          <button onClick={() => dispatch(addTodo({ task, description }))}>AddTodo</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;

