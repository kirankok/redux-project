import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/constants';

const initialState = [];

let nextTodoId = 0;

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { payload } = action;
      return [...state,
      { task: payload.task, description: payload.description, isCompleted: false, id: ++nextTodoId }
      ]
    }
    case COMPLETE_TODO: {
      return state.map((todo) => (todo.id === action.id) ? { ...todo, isCompleted: true } : todo)
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id)
    }
    default: return state;
  }
}
