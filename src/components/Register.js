import {  useEffect,useRef,useState } from 'react'
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link} from 'react-router-dom';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//const REGISTER_URL = '/register';

function Register() {
    
 const userRef = useRef()
 //const errRef = useRef()

 const [user , setUser] = useState('')
 const [validname , setValidName] = useState(false)
 const [userFocus , setUserFocus] = useState(false)

 const [pwd , setPwd] = useState('')
 const [validpwd , setValidpwd] = useState(false)
 const [pwdFocus , setpwdFocus] = useState(false)

 const [ matchpwd, setmatchpwd] = useState('')
 const [validmatch , setValidmatch] = useState(false)
 const [matchFocus , setmatchFocus] = useState(false)

 const [errmsg , seterrmsg] = useState('')
 const [success, setsuccess] = useState(false)

 useEffect(()=>{
    userRef.current.focus()
 },[])

 useEffect (()=>{
    const result = USER_REGEX.test(user)
    console.log(user)
    console.log(result)
    setValidName(result)
 },[user])

 useEffect (()=> {
    const result = PWD_REGEX.test(pwd)
    console.log(pwd)
    console.log(result)
    setValidpwd(result)
    const match = pwd === matchpwd
    setValidmatch(match)
 },[pwd,matchpwd])

 useEffect (()=>{
    seterrmsg ('')
 }, [user,pwd,matchpwd])

 const handleSubmit = async (e) =>{
    e.preventDefault()
    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    if (!v1 || !v2) 
    { seterrmsg('verifier vos entrée')}
    /*try {
        const response = await axios.post(REGISTER_URL, 
                    JSON.stringify({user , pwd}),
                    {
                        headers : { 'content-type' : 'application/json'},
                        withCredentials : true

                    } )
                    console.log(response.data)
                    console.log(response.accessToken)*/
                    setsuccess(true)
                    setUser('')
                    setPwd('')
                    setmatchpwd('')
    /*}
    catch (err){
        if (!err?.response)
        {
            seterrmsg ('pas de serveur data')
        }
        else if (err.response?.status === 409) 
        {
            seterrmsg ('verifier pseudo')
        }    
        else 
        {seterrmsg ('erreur d\'inscription ')

        }
        errRef.current.focus()
    } */ 
 } 




 if (success){
      return(  
        <div className='container-fluid w-100'>
        <div className=' text-white  w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <section className='border border-1 border-primary p-3 rounded shad' style={{width:"400px"}}  >
        <h1> vous ete inscrit avec succes</h1>
        <p>
            <Link to='/signin'> se connecter </Link>
        </p>
        </section></div></div>
      )
}
 else {
 return (
<div className='container-fluid w-100'>
      <div className=' text-white  w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
    <section className='border border-1 border-primary p-3 rounded shad' style={{width:"400px"}}  >
            <p className={errmsg ? "errmsg rounded" : "offscreen rounded"} aria-live="assertive" >{errmsg}</p>
            <h4> Sign up </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username' className='form-label'> Username :
                <span className={validname ? "valid" : "hide"}> <FontAwesomeIcon icon={faCheck} />  </span>
                <span className={validname || !user ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                 </label>
                <input type='text' id='username' className='form-control' ref={userRef} autoComplete="off" onChange={(e)=>setUser(e.target.value)} value={user} 
                aria-invalid={validname ? "false" : "true"} required
                aria-describedby="uidnote" onFocus={()=>setUserFocus(true)} onBlur={()=>setUserFocus(false)} />
                <p id='uidnote' className={ userFocus && user && !validname ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    de 4 à 24 caractères.<br/>
                    commence avec une lettre. <br/>
                    caractères , chiffre , caractères speciaux inclus.
                     </p>

                <label htmlFor='password' className='form-label'> Password :
                <span className={validpwd ? "valid" : "hide" }> <FontAwesomeIcon icon={faCheck} /> </span>
                <span className={ validpwd || !pwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input id='password' type='password' className='form-control' value={pwd} onChange={(e)=>setPwd(e.target.value)} aria-invalid={validpwd ? "false" : "true"}
                required aria-describedby='uidpwd' onFocus={()=>setpwdFocus(true)} onBlur={()=>setpwdFocus(false)}/>
                <p id='uidpwd' className={pwdFocus && !validpwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    de 8 à 24 caractères <br/>
                    contient majuscule, miniscule, chiffre et caractères speciaux <br/>
                    les caractères speciaux : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> 
                    <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

                <label htmlFor='confirm_pwd' className='form-label'> Confirm  password :
                <span className={ validmatch && matchpwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                <span className={ validmatch || !matchpwd ? "hide" : "invalide"}> <FontAwesomeIcon icon={faTimes}/></span>
                </label>
                <input id='confirm_pwd' type='password' className='form-control' value={matchpwd} onChange={(e)=>setmatchpwd(e.target.value)} aria-invalid={validpwd ? "false" : "true"}
                required onFocus={()=>setmatchFocus(true)} onBlur={()=>setmatchFocus(false)}  ria-describedby='confirmnote' />
                <p id='confirmnote'  className={matchFocus && !validmatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    verifier que vous ecrivez la meme mot de passe 
                </p>
                <div className='d-flex justify-content-center'>
                <button disabled={!validpwd || !validmatch || !validname ? true : false} className="btn btn-outline-primary m-2"> s'inscrir </button>
                </div>
            </form>

    </section>

</div></div>    
  )}
}

export default Register