import React from 'react'
import './todo-page.styles.scss'

import TodoForm from '../../components/todo-form/todo-form.component'
import TodosContainer from '../../components/todos-container/todos-container.component'

const TodoPage = () => {
  return (
    <div className="todo-page">
      <TodoForm />
      <TodosContainer />
    </div>
  )
}

export default TodoPage
