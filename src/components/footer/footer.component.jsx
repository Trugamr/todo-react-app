import React from 'react'
import './footer.styles.scss'

import { Pane, Text, Icon } from 'evergreen-ui'

const Footer = () => (
  <div className="footer-container">
    <Pane
      className="footer"
      display="flex"
      padding={16}
      borderRadius={3}
      background="tint2"
      justifyContent="center"
    >
      <Text display="flex" alignItems="center">
        made with <Icon marginX={4} size={14} icon="heart" color="#EC4C47" /> by
        tru ^_^
      </Text>
    </Pane>
  </div>
)

export default Footer
