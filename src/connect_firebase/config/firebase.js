import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCfU3n4yat4L-907jO7Fm0QjMHBjSG6u6s',
  authDomain: 'stydyreact.firebaseapp.com',
  projectId: 'stydyreact',
  storageBucket: 'stydyreact.appspot.com',
  messagingSenderId: '87322285688',
  appId: '1:87322285688:web:9d638f31520ae180a4bf8d',
  measurementId: 'G-JDF7FDDXSC',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
