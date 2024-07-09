import { configureStore } from '@reduxjs/toolkit'
import messReducer from '../features/mess/messSlice'

export const store = configureStore({
  reducer: {
    messArray: messReducer,
  },
})