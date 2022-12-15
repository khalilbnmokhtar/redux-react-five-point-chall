import {createSlice} from '@reduxjs/toolkit'
import { UserData } from './FakeData'

export const UserSlice = createSlice({
    name : 'users',
    initialState : {value : UserData},
    reducers : {
        addUser : (state,action)=>{
                state.value.push(action.payload)
        },
        deletUser :(state,action) => {
            state.value = state.value.filter((user)=> user.id !== action.payload.id)
        },
        updateUser : (state,action) => {
            state.value.map((user) => (user.id === action.payload.id) && ( user.username = action.payload.username))
        },
    },
})

export const {addUser,deletUser,updateUser} = UserSlice.actions
export default UserSlice.reducer