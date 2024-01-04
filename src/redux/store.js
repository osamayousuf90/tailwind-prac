import { configureStore } from '@reduxjs/toolkit'
import sidebarValue from './slices/sidebarValue'

export const store = configureStore({
    reducer: {
        sidebarValue: sidebarValue,
    },
})

export default store