import React from 'react'
import { connect } from 'react-redux'
import './todo-item.styles.scss'

import { Pane, Button, Text, Icon, Dialog, Textarea } from 'evergreen-ui'
import { motion } from 'framer-motion'

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { firestore } from '../../firebase/firebase.utils'

class TodoItem extends React.Component {
  state = {
    text: '',
    starred: false,
    completed: false,
    isShown: false,
    isLoading: false,
    isShownDel: false
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

  handleDelete = async (todoId, closeDialog) => {
    const { currentUser } = this.props

    if (closeDialog) closeDialog()

    try {
      await firestore.doc(`/users/${currentUser.id}/todos/${todoId}`).delete()
    } catch (error) {
      console.error(`failed to delete todo: ${error.message}`)
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDialogConfirm = async (todoId, closeDialog) => {
    this.setState({
      isLoading: true
    })

    const { currentUser } = this.props

    try {
      await firestore.doc(`/users/${currentUser.id}/todos/${todoId}`).update({
        text: this.state.text
      })
    } catch (error) {
      console.error(`failed to edit todo : ${error.message}`)
    }
    closeDialog()
  }

  componentDidMount() {
    const { text, starred, completed } = this.props

    this.setState({
      text,
      starred,
      completed
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
          <motion.div className="motion-button" whileTap={{ scale: 0.9 }}>
            <Button
              appearance="minimal"
              marginRight={4}
              onClick={() => this.setState({ isShown: true })}
              padding={8}
            >
              <Icon icon="edit" color="selected" />
            </Button>
          </motion.div>

          <motion.div className="motion-button" whileTap={{ scale: 0.9 }}>
            <Button
              appearance="minimal"
              marginRight={4}
              padding={8}
              onClick={() => this.handleStarred(todoId)}
            >
              <Icon icon="star" color={`${starred ? '#F7D154' : 'muted'}`} />
            </Button>
          </motion.div>

          <motion.div className="motion-button" whileTap={{ scale: 0.9 }}>
            <Button
              appearance="minimal"
              padding={8}
              onClick={() => this.setState({ isShownDel: true })}
            >
              <Icon icon="cross" color="danger" />
            </Button>
          </motion.div>
        </Pane>

        {/* Edit Dialog  */}
        <Dialog
          isShown={this.state.isShown}
          title="Edit todo"
          onCloseComplete={() =>
            this.setState({ isShown: false, isLoading: false })
          }
          confirmLabel={this.state.isLoading ? 'Saving...' : 'Save'}
          isConfirmLoading={this.state.isLoading}
          onConfirm={closeDialog =>
            this.handleDialogConfirm(todoId, closeDialog)
          }
          onCancel={() => this.setState({ isShown: false })}
        >
          <Textarea
            name="text"
            placeholder="Your todo..."
            value={this.state.text}
            onChange={this.handleChange}
            required
          />
        </Dialog>

        {/* Delete Dialog  */}
        <Dialog
          isShown={this.state.isShownDel}
          title="Delete todo"
          intent="danger"
          onCloseComplete={() =>
            this.setState({ isShownDel: false, isLoadingDel: false })
          }
          confirmLabel="Delete"
          onConfirm={closeDialog => this.handleDelete(todoId, closeDialog)}
          onCancel={() => this.setState({ isShownDel: false })}
        >
          <Text>{this.state.text}</Text>
        </Dialog>
      </Pane>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoItem)
