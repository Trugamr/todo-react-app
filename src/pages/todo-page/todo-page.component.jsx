import React from 'react'
import { connect } from 'react-redux'
import './todo-page.styles.scss'

import TodoForm from '../../components/todo-form/todo-form.component'
import TodosContainer from '../../components/todos-container/todos-container.component'

import { Pane, Heading } from 'evergreen-ui'
import { motion, AnimatePresence } from 'framer-motion'

import { selectCurrentUser } from '../../redux/user/user.selectors'

const TodoPage = ({ currentUser }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  const spring = {
    type: 'spring',
    damping: 30,
    stiffness: 200
  }

  return (
    <div className="todo-page">
      <AnimatePresence exitBeforeEnter>
        {currentUser ? null : (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            key="forAnimation1"
            transition={{ ...spring, delay: 0.4 }}
            variants={variants}
          >
            <Pane
              display="flex"
              padding={15}
              borderRadius={3}
              background="tint2"
              margin={20}
              alignItems="center"
            >
              <Heading color="#7B8B9A">
                Sign in and start adding tasks ^_^
              </Heading>
            </Pane>
          </motion.div>
        )}
        {currentUser ? (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={spring}
            variants={variants}
            key="forAnimation2"
          >
            <TodoForm />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {currentUser ? <TodosContainer /> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoPage)
