import TodoActionTypes from './todo.types'

const INTIAL_STATE = {
  todos: [
    {
      id: 1,
      text: 'i heart react',
      completed: false,
      starred: false,
      createdAt: new Date()
    },
    {
      id: 2,
      text: 'this is some completed but not starred task',
      completed: true,
      starred: false,
      createdAt: new Date()
    },
    {
      id: 3,
      text: 'this is some uncompleted starred task',
      completed: false,
      starred: true,
      createdAt: new Date()
    }
  ]
}

const todoReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}

export default todoReducer
