import React from 'react'
import { connect } from 'react-redux'
import './todos-container.styles.scss'

import { Pane, Heading } from 'evergreen-ui'

import TodoItem from '../todo-item/todo-item.component'

import { selectTodos } from '../../redux/todo/todo.selectors'

const TodosContainer = ({ todos }) => (
  <Pane
    display="flex"
    flexDirection="column"
    borderRadius={3}
    background="tint2"
    margin={20}
    className="todo-container"
  >
    {todos.length ? (
      todos.map(({ id, text, starred, completed, ...otherProps }, index) => (
        <TodoItem
          key={id}
          todoId={id}
          text={text}
          index={index + 1}
          starred={starred}
          completed={completed}
          {...otherProps}
        />
      ))
    ) : (
      <Pane
        display="flex"
        padding={16}
        borderRadius={3}
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="#7B8B9A">Empty :(</Heading>
      </Pane>
    )}
  </Pane>
)

const mapStateToProps = state => ({
  todos: selectTodos(state)
})

export default connect(mapStateToProps)(TodosContainer)
