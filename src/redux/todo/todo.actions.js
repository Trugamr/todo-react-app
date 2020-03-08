import TodoActionTypes from './todo.types'

export const setAllTodos = todos => ({
  type: TodoActionTypes.SET_ALL_TODOS,
  payload: todos
})
