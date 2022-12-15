import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'

const  initialValues ={
  name : '',
  description : '',
  price : '',
  quantity :'',
}




const validate = values => {
  let erorrs = {}
    if (!values.name) { 
      erorrs.name = 'required'
    }else if (!/^[A-z][A-z0-9-_ ]{3,10}$/.test(values.name)){
      erorrs.name = ' votre text doit contenir au moins 4 caractéres '
    }
    if (!values.description) 
    {
      erorrs.description = 'required'
    }else if (!/^[A-z][A-z0-9-_ ]{3,23}$/.test(values.description)){
      erorrs.description = ' votre text doit contenir au moins 4 caractéres '
    }
    if (!values.price)
    {
      erorrs.price = 'required'
    }else if (!/^[0-9-,-.]{3,15}$/.test(values.price)){
      erorrs.price = ' le prix doit contenir uniquement des chiffre exemple : 156,321 || 65.6 || 965 '
    }
    if (!values.quantity)
    {
      erorrs.quantity = 'required'
    }else if (!/^[0-9]{3,15}$/.test(values.quantity)){
      erorrs.quantity = ' le prix doit contenir uniquement des chiffre exemple  965 '
    }



  return erorrs
}


function CrudProductUpdate() {
  const [idprod, setidprod] = useState('')
  const [nameprod, setnameprod] = useState('')
  const [descprod, setdescprod] = useState('')
  const [priceprod, setpriceprod] = useState('')
  const [quantprod, setquantprod] = useState('')


  useEffect(()=>{
    setidprod(localStorage.getItem('ID'))
    setnameprod(localStorage.getItem('name'))
    setdescprod(localStorage.getItem('description'))
    setpriceprod(localStorage.getItem('price'))
    setquantprod(localStorage.getItem('quantity'))
  },[])


  const  hundleonSubmit = () => {
   
    axios.put(`https://639a5e5fd51415019734492a.mockapi.io/crud/${idprod}`, {
    name: nameprod,
    description: descprod,
    price: priceprod,
    quantity: quantprod
  })
  }

  
  const formik = useFormik({
    initialValues,
    validate
  })





  return (
    
       
        <div className=' col border border-1 border-primary shad  text-white m-2 rounded'>
             <h4 className='text-center '> Update product </h4>
             <form onSubmit={hundleonSubmit} >
                <div className='my-2'>
                <label htmlFor='name' className='label-form'> Name :</label>
                <input type="text" id="name" name='name' autoComplete='off' 
                 className='form-control' onChange={(e)=>setnameprod(e.target.value)} value={nameprod}/>
                { formik.errors.name ?  <div  className="instructions"> {formik.errors.name} </div> : null }
                </div>
                <div className='my-2'>
                <label htmlFor='description' className='label-form'> Description :</label>
                <input type="text" id="description" name='description' autoComplete='off' 
                className='form-control' onChange={(e)=>setdescprod(e.target.value)} value={descprod} />
                { formik.errors.description ?  <div className="instructions"> {formik.errors.description} </div> : null }
                
                </div>
                <div className='my-2'>
                <label htmlFor='price' className='label-form'> Price :</label>
                <input type="text" id="price" name='price' autoComplete='off'  
                 className='form-control' onChange={(e)=>setpriceprod(e.target.value)} value={priceprod}/>
                {formik.errors.price ?  <div className="instructions"> {formik.errors.price} </div> : null}
                </div>
                <div className='my-2'>
                <label htmlFor='quatity' className='label-form'> Quantity :</label>
                <input type="text" id="quantity" autoComplete='off' name="quantity"  className='form-control' onChange={(e)=>setquantprod(e.target.value)} value={quantprod} />
                {formik.errors.quantity ?  <div className="instructions"> {formik.errors.quantity} </div> : null}
                </div>
                <button className='btn btn-outline-success m-2 '>Update produact</button>
             </form>
        </div>
        
    
      
      )
  
}

export default CrudProductUpdate