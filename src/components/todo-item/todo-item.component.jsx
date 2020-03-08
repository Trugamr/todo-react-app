import React from 'react'
import './todo-item.styles.scss'

import { Pane, Button, Text, Icon } from 'evergreen-ui'

const TodoItem = ({ index, text, starred, completed }) => (
  <Pane
    display="flex"
    padding={6}
    borderRadius={3}
    alignItems="center"
    className="todo-item"
  >
    <Pane
      flex={1}
      alignItems="center"
      display="flex"
      width={20}
      marginRight={6}
    >
      <Text size={500} marginX={4}>
        {`${index}.`}
      </Text>
      <Text
        size={500}
        marginX={4}
        overflow="hidden"
        className={`todo-text ${completed ? 'strike-text' : ''}`}
      >
        {text}
      </Text>
    </Pane>
    <Pane>
      <Button appearance="minimal" marginRight={4}>
        <Icon icon="star" color={`${starred ? '#F7D154' : 'muted'}`} />
      </Button>
      <Button appearance="minimal">
        <Icon icon="cross" color="danger" />
      </Button>
    </Pane>
  </Pane>
)

export default TodoItem
