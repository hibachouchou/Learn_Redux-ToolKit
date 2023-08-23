import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    posts: [],
    isLoading: false,
    erorr :null ,
}
  
  
  export const getAllPosts=createAsyncThunk('posts/getAll',async()=>{
  const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data
  })
  export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
     //
    },
    extraReducers:{
      // les actions crees hors le reducer   
      [getAllPosts.pending]:(state,action)=>{
        state.isLoading=true
        state.erorr=null
      },
      [getAllPosts.fulfilled]:(state,action)=>{
        state.posts=action.payload
        state.isLoading=false
        state.erorr=null
      },
      [getAllPosts.rejected]:(state,action)=>{
        state.posts=action
        state.isLoading=false
        state.erorr=action?.erorr?.message
      }
    }
  })
  
  
  

  export default postsSlice.reducer