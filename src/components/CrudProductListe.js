import React, { useState, useEffect } from 'react'
import CrudProductAdd from './CrudProductAdd'
import axios from 'axios'
import CrudProductUpdate from './CrudProductUpdate'

function CrudProductListe() {

    const [apiData, setapiData] = useState([])

    useEffect(() => {
        axios.get('https://639a5e5fd51415019734492a.mockapi.io/crud')
            .then((getdata) => {
                setapiData(getdata.data)
            })
            .catch((error)=>console.log(error))
    },[apiData])
   
    const [showUpdate, setshowUpdate] = useState(false)
    const [showAdd, setshowAdd] = useState(false)

    const hundleshowAdd = () => {
         setshowUpdate(false) 
        setshowAdd(true)
        
    }
    const hundleshowupdate = (dataID) => {
         setshowAdd(false) 
        setshowUpdate(true)
        localStorage.setItem("ID",dataID)
        apiData.map((prod)=> {
            if (prod.id === dataID)
            {
                localStorage.setItem("name", prod.name)  
                localStorage.setItem("description", prod.description)        
                localStorage.setItem("price", prod.price)    
                localStorage.setItem("quantity", prod.quantity)    
                    
            }
            return null
        })

    
    }
    return (
        <div className='container p-5 rounded' style={{ height: "100vh" }}>

            <div className='row'>
                {showAdd ? <CrudProductAdd /> : null}
                {showUpdate ? <CrudProductUpdate /> : null}
                <div className=' col border border-1 border-primary shad  text-white rounded'>
                    <table className="table table-dark table-hover">
                        <caption> <button className='btn btn-outline-success btn-sm' onClick={()=>hundleshowAdd()}> Add product </button></caption>
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Description </th>
                                <th> Quantity </th>
                                <th> Price </th>
                                <th> Update</th>
                                
                            </tr>
                        </thead>

                        <tbody id="bodytable">
                            {
                                
                                      apiData.map((prod,index) =>
                                        <tr key={index}>
                                            <td> {prod.name} </td>
                                            <td> {prod.description}</td>
                                            <td> {prod.price}</td>
                                            <td> {prod.quantity}</td>
                                            <td> <button className='btn btn-outline-primary btn-sm' onClick={()=>hundleshowupdate(prod.id)}> Update </button></td>
                                        </tr>
                                    )
                                }
                           

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CrudProductListe