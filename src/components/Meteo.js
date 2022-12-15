import React, { useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fragment } from 'react'
import WeatherComp from './WeatherComp'



const SEARCH_REGEX = /^[A-z][A-z0-9-_ ]{2,25}$/;



function Meteo() {
  const [val, setval] = useState('')
  const [valid, setvalid] = useState(true)
  const [valfocus, setvalfocus] = useState(false)

  
  const datakey = 'aa62d9290cb2a1e37b1c516a87e5d7ab'

  const [weather ,setweather] = useState({})


      useEffect(()=>{
        const result = SEARCH_REGEX.test(val)
        setvalid(result)
      },[val])
 

      const hundleweather = async (e) =>{
        e.preventDefault()
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${datakey}`)
        .then((res)=>res.json())
                .then((data)=>data)
                setweather(data)
              
      }

  useEffect(() => {
    const weatherCheck = async () => {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tunis&appid=${datakey}`)
            .then((res)=>res.json())
            .then((data)=>data)
            setweather(data)
    }

    weatherCheck()
     }, [datakey])

     
 

  return (
    <Fragment>



      <div className='container'>
        <div className='row text-white  w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '90vh' }}>
          <div className='col-6 border border-1 border-primary p-3 rounded shad m-3' style={{ width: "350px" }}>

            <h4> weather to day </h4>
            <form>
              <div className="d-flex justify-content-center flex-column ">
                <label className="form-label">your country :
                  <span className={valid ? "valid" : "hide"}> <FontAwesomeIcon icon={faCheck} />  </span>
                  <span className={valid || !val ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input type="text" className="form-control" autoComplete='off' id="search"
                  value={val} onChange={(e) => setval(e.target.value)}
                  aria-describedby="searchnote" onFocus={() => setvalfocus(true)} onBlur={() => setvalfocus(false)} />

                <p id='searchnote' className={valfocus && val && !valid ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  votre text de recheche doit contenir au moins 4 caractères
                  et 20 caractères en max
                </p>
              </div>
              
              <div className='d-flex justify-content-center'>
                <button className='btn btn-outline-primary rounded-circle p-3 m-2 ' onClick={hundleweather}> GO</button>
              </div>
            </form>

          </div>

          <WeatherComp val={weather}/>

        </div>
      </div>

      
       
        
          
    
      



    </Fragment>



  )
}

export default Meteo