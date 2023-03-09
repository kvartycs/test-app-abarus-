import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import data from './slices/data'

export const store = configureStore({ reducer: { data } })

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
