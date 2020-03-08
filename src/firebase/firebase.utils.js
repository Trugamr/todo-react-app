import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCkjxIEEQshEbM3GNrG5LMH2dqtuEgFLsM',
  authDomain: 'todo-react-app-1c2b9.firebaseapp.com',
  databaseURL: 'https://todo-react-app-1c2b9.firebaseio.com',
  projectId: 'todo-react-app-1c2b9',
  storageBucket: 'todo-react-app-1c2b9.appspot.com',
  messagingSenderId: '494569883453',
  appId: '1:494569883453:web:0bd3c0a828e36e45296754',
  measurementId: 'G-FXZW0XVN8D'
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error(`error creating user: ${error.message}`)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
