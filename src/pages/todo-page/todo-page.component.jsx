import React from 'react'
import { connect } from 'react-redux'
import './todo-page.styles.scss'

import TodoForm from '../../components/todo-form/todo-form.component'
import TodosContainer from '../../components/todos-container/todos-container.component'

import { Pane, Heading } from 'evergreen-ui'

import { selectCurrentUser } from '../../redux/user/user.selectors'

const TodoPage = ({ currentUser }) => {
  return (
    <div className="todo-page">
      {currentUser ? null : (
        <Pane
          display="flex"
          padding={16}
          borderRadius={3}
          background="tint2"
          margin={20}
          alignItems="center"
        >
          <Heading color="#7B8B9A">Sign in and start adding tasks ^_^</Heading>
        </Pane>
      )}
      {currentUser ? <TodoForm /> : null}
      {currentUser ? <TodosContainer /> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoPage)
