"use client"
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const availDoctor = props => {
    const[availDoc,setAvailDOc]=useState()

     
        useEffect(()=>{
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch("http://localhost:3000/api/doctors", requestOptions)
                .then(response => response.json())
                .then(result => setAvailDOc(result ))
                .catch(error => console.log('error', error));
        
        },[availDoc])

    console.log(availDoc);
  return (
    <div className="card" style={{height:"55vh"}}>
        {/* Header Of card */}
        <div className='d-flex justify-content-center pt-3 pb-2'>
            
            <h4 className='mt-2'>Available Doctors</h4>
            {/* <div><button className='btn btn-outline-success' onClick={openModal} >Add Spend</button></div> */}
        </div>
        
        <table className='table table-light table-striped table-bordered'>
        <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope='col'>Name</th>
                    
                    <th scope="col">PhoneNo</th>
                    <th scope="col">Email</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">Available</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {availDoc?Object.values(availDoc.users).map((p, i) => {
                    return (
                      <tr key={p.id} >
                        <th scope="row">{i+1}</th>
                        <td>{p.name}</td>
                        
                        <td>{p.phoneNo}</td>
                        <td>{p.email}</td>
                        <td>{p.specialization}</td>
                        <td className='bg-lime-300	'>{p.available?"Yes":"No"}</td>

                        
                        

                        <td>
                           
                        </td>
                      </tr>
                    );
                  }):<div className='d-flex justify-content-center align-content-center'>
                    <div class="loading-wave">
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                </div>
                  </div>}
                </tbody>
    </table>
        </div>
        
     
  )
}

availDoctor.propTypes = {}

export default availDoctor