/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase'
import 'firebase/firestore'
// eslint-disable-next-line no-unused-vars
import firebaseconfig from './firebaseconfig'
const firebaseapp = firebase.initializeApp(firebaseConfig)
export default firebaseapp.firestore()