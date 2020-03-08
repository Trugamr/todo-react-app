import React from 'react'
import { connect } from 'react-redux'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import TodoPage from './pages/todo-page/todo-page.component'
import Footer from './components/footer/footer.component'

import {
  auth,
  createUserProfileDocument,
  firestore
} from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { setAllTodos } from './redux/todo/todo.actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, setAllTodos } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const todosRef = await firestore.collection(
          `/users/${userAuth.uid}/todos/`
        )
        todosRef.onSnapshot(snapShot => setAllTodos(snapShot))

        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
        // set todos to be empty
        setAllTodos(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router basename="/todo-react-app">
        <div className="app">
          <Header className="header" />
          <div className="content">
            <Switch>
              <Route path="/">
                <TodoPage />
              </Route>
            </Switch>
          </div>
          <Footer className="footer" />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setAllTodos: todos => dispatch(setAllTodos(todos))
})

export default connect(null, mapDispatchToProps)(App)
