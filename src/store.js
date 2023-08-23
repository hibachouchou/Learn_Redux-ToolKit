import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice/counterSlice'
import  postsSlice  from './posts/postsSlice/PostsSlice'
export const store = configureStore({
  reducer: {
    counterData:counterSlice,
    postsData:postsSlice,
  },
  devTools:true
})