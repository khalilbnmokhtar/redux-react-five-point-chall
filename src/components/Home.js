
import { Fragment } from 'react'
import Navlink from './Navlink'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register'
import Search from './Search'
import AboutUs from './AboutUs'
import Notfound from './Notfound'
import Particle from './Particles'
import Login from './Login'
import Meteo from './Meteo'
import CrudProductListe from './CrudProductListe'








function Home() {


     
 

  return (
    <Fragment>
      <Particle />
      <BrowserRouter>
        <Navlink />
        <Routes>

          <Route path='/' element={<Meteo/>}></Route>
          <Route path='/signin' element={< Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/search' element={<Search />} ></Route>
          <Route path='//productmanagement' element={<CrudProductListe/>}/>
          <Route path='/aboutus' element={<AboutUs />} ></Route>
          <Route path='*' element={<Notfound />} ></Route>
        </Routes>
      </BrowserRouter>
  



    </Fragment>



  )
}

export default Home