import React from 'react'
import {Link} from 'react-router-dom'


function Navlink() {
  return (
    <div className='float-end text-primary'>
    <ul className="nav">
    <li className="nav-item">
            <Link className="nav-link" to="/">Home </Link>
        </li>
    <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign in </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link"  to="/register"> Sign up</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/productmanagement"> product crud </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
    </ul>

</div>
  )
}

export default Navlink