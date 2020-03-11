import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './todo-page.styles.scss'

import TodoForm from '../../components/todo-form/todo-form.component'
import TodosContainer from '../../components/todos-container/todos-container.component'

import { Pane, Heading } from 'evergreen-ui'
import { motion, AnimatePresence } from 'framer-motion'

import { selectCurrentUser } from '../../redux/user/user.selectors'

const TodoPage = ({ currentUser }) => {
  const [todoFormAnimEnd, setTodoFormAnimEnd] = useState(false)

  // set form anim end status back to false after component mount
  // so animation would wait even if user signs out and back in
  useEffect(() => {
    if (!currentUser) setTodoFormAnimEnd(false)
  })

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

  return (
    <div className="todo-page">
      <AnimatePresence exitBeforeEnter>
        {currentUser ? null : (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            key="forAnimation1"
            transition={{ duration: 0.5, delay: 0.4 }}
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
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={variants}
            key="forAnimation2"
            onAnimationComplete={() => setTodoFormAnimEnd(true)}
          >
            <TodoForm />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {currentUser && todoFormAnimEnd ? <TodosContainer /> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoPage)
