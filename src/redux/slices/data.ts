import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
interface filterProps {
  currentPage: number
  sortId: string
  sortTitle: string
  sortBody: string
  search: string
}

const initialState = { posts: [], status: Status.LOADING }

export const fetchData = createAsyncThunk(
  'fetchData',
  async ({ currentPage, sortId, sortTitle, sortBody, search }: filterProps) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10&_sort=id,title,body&_order=${sortId},${sortTitle},${sortBody}&q=${search}`
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
