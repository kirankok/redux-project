import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './constants'

export const addTodo = (taskDetails) => {
  return {
    type: ADD_TODO,
    payload: {
      task: taskDetails.task,
      description: taskDetails.description
    }
  }
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}