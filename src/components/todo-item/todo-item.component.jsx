import React from 'react'
import { connect } from 'react-redux'
import './todo-item.styles.scss'

import { Pane, Button, Text, Icon } from 'evergreen-ui'

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { firestore } from '../../firebase/firebase.utils'

class TodoItem extends React.Component {
  state = {
    starred: false,
    completed: false
  }

  handleCompleted = async todoId => {
    const { currentUser } = this.props

    try {
      const completed = !this.state.completed
      await firestore.doc(`/users/${currentUser.id}/todos/${todoId}`).update({
        completed
      })

      this.setState({
        completed
      })
    } catch (error) {
      console.error(`failed to set todo as completed: ${error.message}`)
    }
  }

  handleStarred = async todoId => {
    const { currentUser } = this.props

    try {
      const starred = !this.state.starred
      await firestore.doc(`/users/${currentUser.id}/todos/${todoId}`).update({
        starred
      })

      this.setState({
        starred
      })
    } catch (error) {
      console.error(`failed to set todo as starred: ${error.message}`)
    }
  }

  handleDelete = async todoId => {
    const { currentUser } = this.props

    try {
      await firestore.doc(`/users/${currentUser.id}/todos/${todoId}`).delete()
    } catch (error) {
      console.error(`failed to delete todo: ${error.message}`)
    }
  }

  componentDidMount() {
    const { completed, starred } = this.props

    this.setState({
      completed,
      starred
    })
  }

  render() {
    const { todoId, index, text, starred, completed } = this.props

    return (
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
            onClick={() => this.handleCompleted(todoId)}
            data-completed={completed}
          >
            {text}
          </Text>
        </Pane>
        <Pane>
          <Button
            appearance="minimal"
            marginRight={4}
            onClick={() => this.handleStarred(todoId)}
          >
            <Icon icon="star" color={`${starred ? '#F7D154' : 'muted'}`} />
          </Button>
          <Button
            appearance="minimal"
            onClick={() => this.handleDelete(todoId)}
          >
            <Icon icon="cross" color="danger" />
          </Button>
        </Pane>
      </Pane>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoItem)
