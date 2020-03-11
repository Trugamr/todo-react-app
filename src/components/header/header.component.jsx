import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/pencil.svg'

import { Pane, Button, Heading, Icon } from 'evergreen-ui'

import UserCard from '../user-card/user-card.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { motion, AnimatePresence } from 'framer-motion'

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0
  }
}

const userVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0
  }
}

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 50
}

const springUser = {
  type: 'spring',
  damping: 25,
  stiffness: 300
}

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <motion.div
        initial="hidden"
        animate="show"
        transition={spring}
        variants={headerVariants}
      >
        <Pane
          className="header"
          display="flex"
          padding={16}
          borderRadius={3}
          background="tint2"
          overflow="hidden"
        >
          <Pane flex={1} display="flex" alignItems="center">
            <Logo className="logo" />
            <Heading size={600}> Todo</Heading>
          </Pane>
          <Pane display="flex">
            <AnimatePresence exitBeforeEnter initial={false}>
              {currentUser ? (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={userVariants}
                  transition={springUser}
                  key="forAnimationPresence1"
                >
                  <Pane display="flex">
                    <UserCard
                      name={currentUser.displayName}
                      imageURL={currentUser.photoURL}
                    />
                    <Button
                      onClick={() => auth.signOut()}
                      appearance="minimal"
                      paddingX={8}
                    >
                      <Icon icon="log-out" color="muted" />
                    </Button>
                  </Pane>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={springUser}
                  variants={userVariants}
                  key="forAnimationPresence2"
                >
                  <Button onClick={signInWithGoogle} appearance="primary">
                    <span>Sign In</span>
                    <Icon icon="log-in" marginLeft={10} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Pane>
        </Pane>
      </motion.div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header)
