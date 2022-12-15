import React from 'react'
import Typed from 'react-typed'

function AboutUs() {
  return (
    <div className='container-fluid'>
      <Typed className='typed-text text-white fs-5 text-center' 
        strings={['FrontEnd developer  ',' and content creator ','KHALIL BEN MOKHTAR']} 
        typeSpeed={80} backSpeed={60} loop/> 
      <div className='row w-100 d-flex align-items-center justify-content-center' style={ {height:"100vh"}}>
      
        <div className='col text-white border border-1 border-primary shad  m-3 rounded' style={{height:'250px'}}>
          <h4 className='text-center'> BASICS </h4>
          <ol className=" list-group-numbered text-white">
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className=" me-auto">
                <div className="fw-bold">HTML</div>
                hypertext markup language
              </div>
              <span className="badge bg-primary rounded-pill">98%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className=" me-auto">
                <div className="fw-bold">CSS</div>
                cascading style sheets
              </div>
              <span className="badge bg-primary rounded-pill">95%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className=" me-auto">
                <div className="fw-bold">JS</div>
                JavaScript
              </div>
              <span className="badge bg-primary rounded-pill">96%</span>
            </li>
          </ol>

        </div>
        <div className='col text-white border border-1 border-primary shad m-3  rounded'style={{height:'250px'}}>
          <h4 className='text-center'> FRAMEWORK</h4>
          <ol className=" list-group-numbered text-white">
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bootsrap</div>
              </div>
              <span className="badge bg-primary rounded-pill">98%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">React js</div>
              </div>
              <span className="badge bg-primary rounded-pill">97%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">next JS</div>
              </div>
              <span className="badge bg-primary rounded-pill">00%</span>
            </li>
          </ol>


        </div>
        <div className='col text-white border border-1 border-primary shad m-3  rounded'style={{height:'250px'}}>
          <h4 className='text-center'> DESIGN</h4>
          <ol className=" list-group-numbered text-white">
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">ADOBE XD</div>
                
              </div>
              <span className="badge bg-primary rounded-pill">98%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">PHOTOSHOP</div>
                
              </div>
              <span className="badge bg-primary rounded-pill">50%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-2 me-auto">
                <div className="fw-bold">PHOTOFILTER</div>
                
              </div>
              <span className="badge bg-primary rounded-pill">96%</span>
            </li>
          </ol>


        </div>
        <div className='col text-white border border-1 border-primary shad m-3  rounded'style={{height:'250px'}}>
        <h4 className='text-center'> EXTRA </h4>
        <ol>
          <li>git </li>
          <li>github</li>
          <li>library & framework</li>
    
        </ol>

        
        
        </div>

      </div>
      
      
      
      
      </div>)
                 
            
}

      export default AboutUs