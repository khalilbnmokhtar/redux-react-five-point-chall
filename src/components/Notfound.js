import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Notfound() {
    const navig = useNavigate()
   
    useEffect(()=>{
        setTimeout(()=>{
            navig('/signin')
        },5000)
    }, [navig] )

  return (
    <div className='container'>
            <div className=' text-white  w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        
   
    <div className=' text-white border border-1 border-primary p-3 rounded shad' style={{ width: "350px" }}>
        
        <h2> this page Notfound </h2>
        <p> you will be redirected to login page in 5sec..</p>
        <p> else : <Link to="/signin">click here to login  </Link> </p>

    </div></div></div>
  )
}

export default Notfound