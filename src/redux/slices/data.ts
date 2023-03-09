import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState = { posts: [], status: Status.LOADING }

export const fetchData = createAsyncThunk(
  'fetchData',
  async ({ currentPage, sort, search }: any) => {
    console.log(currentPage)

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10&_sort=id&_order=${sort}`
    )
    return data
  }
)

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = Status.LOADING
      state.posts = []
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.posts = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log(action)

      state.status = Status.ERROR
      state.posts = []
    })
  },
})

export const {} = data.actions

export default data.reducer
