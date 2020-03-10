import React, { useState } from 'react'
import { connect } from 'react-redux'
import './todos-container.styles.scss'

import { Pane, Heading } from 'evergreen-ui'
import { motion } from 'framer-motion'

import TodoItem from '../todo-item/todo-item.component'

import { selectTodos } from '../../redux/todo/todo.selectors'

const itemVariants = {
  hidden: {
    y: -20,
    scale: 0,
    opacity: 0
  },
  show: custom => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.08
    }
  })
}

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 200
}

const TodosContainer = ({ todos }) => {
  // disable stagger animation to prevent delay to newly added items
  const [stagger, setStagger] = useState(true)
  const todosLength = todos.length
  return (
    <Pane
      display="flex"
      flexDirection="column"
      borderRadius={3}
      background="tint2"
      margin={20}
      className="todo-container"
    >
      {todosLength ? (
        todos.map(({ id, text, starred, completed, ...otherProps }, index) => (
          <motion.div
            key={id}
            custom={stagger ? index : 1}
            initial="hidden"
            animate="show"
            transition={spring}
            variants={itemVariants}
            onAnimationComplete={() => {
              if (index === todosLength - 1) setStagger(false)
            }}
          >
            <TodoItem
              todoId={id}
              text={text}
              index={index + 1}
              starred={starred}
              completed={completed}
              {...otherProps}
            />
          </motion.div>
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
}

const mapStateToProps = state => ({
  todos: selectTodos(state)
})

export default connect(mapStateToProps)(TodosContainer)
