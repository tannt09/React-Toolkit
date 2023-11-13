import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await axios.fetchUserById(userId)
    return response.data
  },
)

const initialState = {
  value: 0,
}

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state) {
      return {
        ...state,
        value: state.value + 1,
      }
    },
    decrement(state) {
      return {
        ...state,
        value: state.value - 1,
      }
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
    })
    builder.addCase(fetchUserById.pending, (state, action) => {
      // Handle when pending
    })
    builder.addCase(fetchUserById.rejected, (state, action) => {
      // Handle when reject
    })
  },
})

dispatch(fetchUserById(123))

export const { increment, decrement, incrementByAmount } = usersSlice.actions
export default usersSlice.reducer
