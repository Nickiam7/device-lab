import { createStore, combineReducers, compose } from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBv-pI5zyV9Axilff4UV-O0ngicmZfn70A",
	authDomain: "device-lab-e5413.firebaseapp.com",
	databaseURL: "https://device-lab-e5413.firebaseio.com",
	projectId: "device-lab-e5413",
	storageBucket: "device-lab-e5413.appspot.com",
	messagingSenderId: "590284670042"	
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
		reactReduxFirebase(firebase),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store;
