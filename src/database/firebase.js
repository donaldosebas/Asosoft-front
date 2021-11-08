// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnm2oQFWpX2pM5kE23zCpcT1yxE96kn4I',
  authDomain: 'asosoft-firebase.firebaseapp.com',
  projectId: 'asosoft-firebase',
  storageBucket: 'asosoft-firebase.appspot.com',
  messagingSenderId: '231539312755',
  appId: '1:231539312755:web:717b503dbe1a91fd93c206',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
