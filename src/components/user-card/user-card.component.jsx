import React from 'react'

import { Pane, Avatar, Text } from 'evergreen-ui'

import './user-card.styles.scss'

const UserCard = ({ name, imageURL, ...otherProps }) => (
  <Pane
    display="flex"
    marginRight={8}
    marginLeft={8}
    alignItems="center"
    {...otherProps}
  >
    <Avatar src={imageURL} name={name} size={32} marginRight={8} />
    <Text size={500}>{name}</Text>
  </Pane>
)

export default UserCard
