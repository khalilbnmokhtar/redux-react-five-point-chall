import { createSlice } from "@reduxjs/toolkit";
import { UserData } from './FakeData'

export const UserLoginSlice = createSlice({
    name : 'Userlogin',
    initialState : {value : UserData},
    reducers : {
        Uselogin : (state, action) => {
            var aux = false
          aux =  state.value.map((user) => ((user.username === action.payload.username) && (user.password === action.payload.password)) &&  (true) )
           console.log(aux) 
           return  aux
           
             
        }
    }

})
export const {Uselogin} = UserLoginSlice.actions
export default UserLoginSlice.reducer


 