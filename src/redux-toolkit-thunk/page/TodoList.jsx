import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/Reducer'

const TodoList = () => {
  const count = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment ::::</button>
    </>
  )
}

export default TodoList
