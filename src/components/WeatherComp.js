import React from 'react'

function WeatherComp(props) {
  
    const data = props.val
    const iconurl = `http://openweathermap.org/img/wn/${Array.isArray(data?.weather) && data?.weather[0]?.icon}.png`
    console.log(props.val)
  return (
    <div className='col-6 text-white border border-1 border-primary rounded shad'>
        <p className=' text-center fw-bold '> 
        {data.name} weather 
         <span className='text-danger fw-light'> As of {new Date().toLocaleTimeString()}</span>
        </p>
        <h1 className='text-center '> {Math.floor(data?.main?.temp - 273.15)}°C  
        <span className='text-danger fw-light'> {Array.isArray(data?.weather) && data?.weather[0]?.main}
        <img src={iconurl} alt="icon.." /></span></h1>
        <h3 className='text-center'> {Array.isArray(data?.weather) && data?.weather[0]?.description}</h3>
      <p className='fw-bold'> hight/low : <span className='text-danger '>{Math.floor(data?.main?.temp_max - 273.15)}°C || {Math.floor(data?.main?.temp_min - 273.15)}°C   </span>
       , Humidity : <span className='text-danger'> {data?.main?.humidity} %</span> , Pressure : <span className='text-danger'> {data?.main?.pressure} hpa</span>
        , visibility : <span className='text-danger '>{data?.visibility /1000} km</span>
        </p>

    </div>
  )
}

export default WeatherComp