import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'

import { Pane, Button, Heading } from 'evergreen-ui'

import { signInWithGoogle } from '../../firebase/firebase.utils'

const Header = () => (
  <Pane
    display="flex"
    padding={16}
    borderRadius={3}
    background="tint2"
    margin={20}
  >
    <Pane flex={1} display="flex" alignItems="center">
      <Heading size={600}>✏ Todo</Heading>
    </Pane>
    <Pane>
      <Button onClick={signInWithGoogle} appearance="primary">
        Sign In
      </Button>
    </Pane>
  </Pane>
)

export default connect(null, null)(Header)
