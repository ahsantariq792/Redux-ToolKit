import { createSlice } from "@reduxjs/toolkit"
import {deleteUsers} from "../actions"


const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        // deleteUsers(state, action) {
        //     return []
        // }
    },

    // if a functionality is same in two or more slices than we use extra reducer 
    // if action is to be handled by multiple reducers we use extra reducer
    // extra reducer should be defined atleast in one reducer

    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return []
        })
    }
})
console.log(UserSlice.actions)
export { UserSlice }
export const { addUser, removeUser } = UserSlice.actions

