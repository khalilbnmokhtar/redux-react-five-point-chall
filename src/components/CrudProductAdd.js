import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const initialValues = {
  name: '',
  description: '',
  price: '',
  quantity: '',
}

const onSubmit = values => {
  console.log(values)
  axios.post(`https://639a5e5fd51415019734492a.mockapi.io/crud`, {
    name: values.name,
    description: values.description,
    price: values.price,
    quantity: values.quantity
  })

}





const validate = values => {
  let erorrs = {}
  if (!values.name) {
    erorrs.name = 'required'
  } else if (!/^[A-z][A-z0-9-_ ]{3,10}$/.test(values.name)) {
    erorrs.name = ' votre text doit contenir au moins 4 caractéres '
  }
  if (!values.description) {
    erorrs.description = 'required'
  } else if (!/^[A-z][A-z0-9-_ ]{3,23}$/.test(values.description)) {
    erorrs.description = ' votre text doit contenir au moins 4 caractéres '
  }
  if (!values.price) {
    erorrs.price = 'required'
  } else if (!/^[0-9-,-.]{3,15}$/.test(values.price)) {
    erorrs.price = ' le prix doit contenir uniquement des chiffre exemple : 156,321 || 65.6 || 965 '
  }
  if (!values.quantity) {
    erorrs.quantity = 'required'
  } else if (!/^[0-9]{3,15}$/.test(values.quantity)) {
    erorrs.quantity = ' le prix doit contenir uniquement des chiffre exemple  965 '
  }



  return erorrs
}


function CrudProductAdd() {
 
  
 
 
  


  return (


    <div className=' col border border-1 border-primary shad  text-white m-2 rounded'>
      <h4 className='text-center '> add product </h4>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <Form>
          <div className='my-2'>
            <label htmlFor='name' className='label-form'> Name :</label>
            <Field type="text" id="name" name='name' className='form-control' />
            <ErrorMessage name='name' />
          </div>
          <div className='my-2'>
            <label htmlFor='description' className='label-form'> Description :</label>
            <Field type="text" id="description" name='description' className='form-control' />
            <ErrorMessage name="description" />
          </div>
          <div className='my-2'>
            <label htmlFor='price' className='label-form'> Price :</label>
            <Field type="text" id="price" name='price' className='form-control' />
            <ErrorMessage name='price' />
          </div>
          <div className='my-2'>
            <label htmlFor='quatity' className='label-form'> Quantity :</label>
            <Field type="text" id="quantity" name="quantity" className='form-control' />
            <ErrorMessage name='quantity' />
          </div>
          <button className='btn btn-outline-success m-2' type='submit' >Add Product</button>
        </Form>
      </Formik>
    </div>



  )

}

export default CrudProductAdd