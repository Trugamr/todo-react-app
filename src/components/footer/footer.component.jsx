import React, { useState } from 'react'
import './footer.styles.scss'

import { Pane, Text, Icon } from 'evergreen-ui'
import { motion } from 'framer-motion'

const Footer = () => {
  const [isAnimated, setAnimate] = useState(false)

  const heartVariants = {
    stop: {
      scale: 1
    },
    animate: {
      scale: [1, 1.1, 0.9, 1],
      transition: {
        repeatDelay: 1,
        loop: Infinity
      }
    }
  }

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50
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

  return (
    <div className="footer-container">
      <motion.div
        initial="hidden"
        animate="show"
        transition={spring}
        variants={footerVariants}
      >
        <Pane
          className="footer"
          display="flex"
          padding={16}
          borderRadius={3}
          background="tint2"
          justifyContent="center"
        >
          <Text display="flex" alignItems="center">
            made with
            <motion.span
              variants={heartVariants}
              animate={isAnimated ? 'animate' : 'stop'}
              onHoverStart={() => setAnimate(true)}
              onHoverEnd={() => setAnimate(false)}
            >
              <Icon marginX={4} size={14} icon="heart" color="#EC4C47" />
            </motion.span>
            by tru ^_^
          </Text>
        </Pane>
      </motion.div>
    </div>
  )
}

export default Footer
