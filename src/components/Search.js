import React, { useState, useEffect } from 'react'
import Typed from 'react-typed'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from 'axios'

const SEARCH_REGEX = /^[A-z][A-z0-9-_ ]{2,50}$/;

function Search() {

    const [val, setval] = useState('')
    const [valid, setvalid] = useState(true)
    const [valfocus, setvalfocus] = useState(false)
    const [ssearchResult , setsearchResult] = useState([])


    useEffect(() => {
        const result = SEARCH_REGEX.test(val)
        setvalid(result)
    }, [val])

    const hundlesearch = (e) => {
        e.preventDefault()
        const search = async () => {
          const response = await  axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action: "query",
                    list: "search",
                    srsearch: val,
                    format: "json",
                    origin :"*"
                },
            })
            setsearchResult(response.data.query.search)
        }
        
           
            if (val)
            {search()}
           
           
        
    }

const showresult = ssearchResult.map((res)=> <div key={res.pageid} className="d-flex flex-column text-white border border-1 border-primary rounded p-2 m-2 "> 
                    <p className='text-danger'> {res.title}</p>
                    <p dangerouslySetInnerHTML={{ __html : res.snippet}} /> 
                    </div>)

 


    return (
        <div className='container-fluid '>


            <div className=' text-white  w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh' }}>
                <Typed className='typed-text text-white fs-5 text-center'
                    strings={['search every thing you need ', ' only from WIKIPEDIA ']}
                    typeSpeed={80} backSpeed={60} loop />
                <form className='border border-1 border-primary p-3 rounded shad' style={{ width: "350px" }}>
                    <div className="d-flex justify-content-center flex-column ">
                        <label className="form-label">Wiki search
                            <span className={valid ? "valid" : "hide"}> <FontAwesomeIcon icon={faCheck} />  </span>
                            <span className={valid || !val ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                        </label>
                        <input type="text" className="form-control" autoComplete='off' id="search"
                            value={val} onChange={(e) => setval(e.target.value)}
                            aria-describedby="searchnote" onFocus={() => setvalfocus(true)} onBlur={() => setvalfocus(false)} />
                        <div id="searchhelp" className="form-text">these search is only in WIKIPEDIA.</div>
                        <p id='searchnote' className={valfocus && val && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            votre text de recheche doit contenir au moins 3 caractères 
                            et 50 caractères en max
                        </p>
                        <div className="d-flex justify-content-center">
                            <button className='btn btn-outline-primary mt-3' onClick={hundlesearch}> <i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
            {showresult}

        </div>
    )
}

export default Search