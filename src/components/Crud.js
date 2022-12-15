import {useSelector,useDispatch} from 'react-redux'

import {addUser,deletUser,updateUser} from '../features/Users'
import { useState } from 'react';

import React from 'react'

function Crud() {
    const [name ,setname] = useState("")
    const [username,setusername]=useState("")
    const [newusername,setnewusername]=useState("")
    const dispatch = useDispatch()
    const listUser = useSelector((state)=>state.users.value)


 
    return (
    
        <div className="container">
    
          <h1 className='text-primary'> user manegement </h1>
          <div className='text-white border border-1 rounded p-2 m-2 adduser'>
            <form>
              <div className="mb-3">
                <label  className="form-label"> nom </label>
                <input type="text" className="form-control"  onChange={(e)=> setname(e.target.value)}/>    
              </div>
              <div className="mb-3">
                <label  className="form-label">username</label>
                <input type="text" className="form-control"  onChange={(e)=>setusername(e.target.value)}/>
              </div>
              <button type="button" className="btn btn-outline-primary" onClick={()=>dispatch(addUser({
                id : listUser.length +1 ,
                 name ,
                 username ,}))}>ajout</button>
              
            </form>
    
          </div>
    
            <div className='text-white p-2'>
             {
              listUser.map((user,key)=>{
                return (
                  <div key={key} className='d-flex justify-content-center border border-2 rounded flex-column p-2 k m-2'>
                  <p className='fw-bold text-white'> id : {user.id}</p>
                  <p className='fw-bold text-white'> name : {user.name}</p> 
                 <div> <p className='fw-bold text-white'> username : {user.username}</p><input type="text" className="form-control" placeholder='new username...' onChange={(e)=> setnewusername(e.target.value)}/> </div>
                  <div>
                  <button type='button' className='btn btn-outline-danger my-2' onClick={()=>dispatch(deletUser({id : user.id}))}> delete user </button>
                  <button type='button' className='btn btn-outline-success my-2 ms-2 ' onClick={()=>dispatch(updateUser({id : user.id , username : newusername}))}> update username </button>
                  </div>
                  </div>
                )
              })
             }   
    
            </div>
        </div>
      );
 
}

export default Crud