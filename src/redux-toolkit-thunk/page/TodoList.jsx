import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Reducer'

const TodoList = () => {
  const count = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment ::::</button>
      <button onClick={handleDecrement}>Decrement ::::</button>
    </>
  )
}

export default TodoList
