import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from './features/survey-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: { surveyReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispaptch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector