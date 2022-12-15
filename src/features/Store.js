import {configureStore} from '@reduxjs/toolkit'
import UsersReducer from './Users'
import UserLoginReducer from './UserLogin';
import 'bootstrap-icons/font/bootstrap-icons.css';

 export const store = configureStore({
  reducer :{
    users : UsersReducer,
    Userlogin : UserLoginReducer,

  }
})

