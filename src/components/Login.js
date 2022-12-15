import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Uselogin } from '../features/UserLogin'

import CrudProductListe from './CrudProductListe'



function Login() {
   const dispatch = useDispatch()
    const [username, setusername] = useState('')
    const [userpass, setuserpass] = useState('')
    const [log , setlog] = useState(false)
    if (log)
    {
      return  <CrudProductListe />

    }else{
        return (

            <div className='container-fluid w-100'>
                 
            <div className=' text-white  w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                
                <form className='border border-1 border-primary p-3 rounded shad' onSubmit={() =>setlog(dispatch(Uselogin({ username: username, password: userpass })))} >
                    <div className="mb-3">
                        <label className="form-label" >USER NAME</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={username} aria-describedby="emailHelp"
                            onChange={(e) => setusername(e.target.value)} required/>
                        <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={userpass}
                            onChange={(e) => setuserpass(e.target.value)} required/>
                    </div>
                    <div className='d-flex justify-content-center p-2'>
                        <button  className="btn btn-outline-primary"
                           > sign in  </button> </div>
                </form>

                    {/**setlog(dispatch(Uselogin({ username: username, password: userpass })))} */}
                
            </div></div>
      
    )
    }
   
}

export default Login