import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import usersReducer from './Reducer'

const reducer = {
  users: usersReducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})
