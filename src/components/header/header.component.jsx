import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/pencil.svg'

import { Pane, Button, Heading, Icon } from 'evergreen-ui'

import UserCard from '../user-card/user-card.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { motion } from 'framer-motion'

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

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 50
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
        >
          <Pane flex={1} display="flex" alignItems="center">
            <Logo className="logo" />
            <Heading size={600}> Todo</Heading>
          </Pane>
          <Pane display="flex">
            {currentUser ? (
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
            ) : (
              <Button onClick={signInWithGoogle} appearance="primary">
                <span>Sign In</span>
                <Icon icon="log-in" marginLeft={10} />
              </Button>
            )}
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
