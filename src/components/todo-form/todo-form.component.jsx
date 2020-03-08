import React from 'react'
import { connect } from 'react-redux'
import './todo-form.styles.scss'

import { Pane, Button, Text, TextInput } from 'evergreen-ui'

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { firestore } from '../../firebase/firebase.utils'

class TodoForm extends React.Component {
  state = {
    text: '',
    createdAt: null,
    disabled: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    this.setState({
      disabled: true
    })

    const { currentUser } = this.props

    try {
      const todosRef = await firestore.collection(
        `/users/${currentUser.id}/todos`
      )

      await todosRef.add({
        text: this.state.text,
        createdAt: new Date(),
        starred: false,
        completed: false
      })
    } catch (error) {
      console.error(`couldn't save todo ${error.message}`)
    }

    this.setState({
      text: '',
      disabled: false
    })
  }

  render() {
    const { currentUser } = this.props

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <Pane
          display="flex"
          margin={20}
          borderRadius={3}
          alignItems="center"
          className="todo-item"
          height={50}
        >
          <Pane
            flex={1}
            alignItems="center"
            display="flex"
            width={20}
            height="100%"
          >
            <TextInput
              className="text-input"
              name="text"
              onChange={this.handleChange}
              placeholder="Enter a new task"
              width="100%"
              size={500}
              height="100%"
              paddingX={12}
              required
              value={this.state.text}
              disabled={!currentUser || this.state.disabled}
            />
          </Pane>
          <Pane height="100%">
            <Button
              className="add-button"
              appearance="minimal"
              height="100%"
              paddingX={20}
              disabled={!currentUser || this.state.disabled}
            >
              <Text size={400}>Add</Text>
            </Button>
          </Pane>
        </Pane>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(TodoForm)
