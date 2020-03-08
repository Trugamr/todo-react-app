import TodoActionTypes from './todo.types'

import { snapShotToArray } from './todo.utils'

const INTIAL_STATE = {
  todos: []
}

const todoReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_ALL_TODOS:
      return {
        ...state,
        todos: snapShotToArray(action.payload)
      }
    default:
      return state
  }
}

export default todoReducer
