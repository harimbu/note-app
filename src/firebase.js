import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAnG2Bk7sBDoHkEcLaEWPVUH4xtaGWxORo',
  authDomain: 'note-428e3.firebaseapp.com',
  projectId: 'note-428e3',
  storageBucket: 'note-428e3.appspot.com',
  messagingSenderId: '317569089914',
  appId: '1:317569089914:web:2197e0125b3021843356c3',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
