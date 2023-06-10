import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './Slices/UserSlices'

const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    },
})

export default store