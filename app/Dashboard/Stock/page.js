"use client"
import React, { useEffect, useState } from 'react'
 import { prisma } from '@/config/db';
 import UpdateModal from './componenta/updateModal';
 import DeleteModal from './componenta/deleteModal';


export default   function page() {
  const [data, setData] = useState( )
  const [dataUpdate, setDataUpdate] = useState( )
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  // Update functions
  const openModal = () => {
      setIsModalOpen(true);
      console.log(isModalOpen);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const updateHandle = (p)=>{
      setDataUpdate(p)
      openModal()
    }
// Delete function
    const openModal1 = () => {
      setIsModalOpen1(true);
      console.log(isModalOpen);
    };
  
    const closeModal1 = () => {
      setIsModalOpen1(false);
    };
  
    const deleteHandle = (p)=>{
      setDataUpdate(p)
      openModal1()
    }
  // Fetching function
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/Stocks", requestOptions).then(response => response.json()).then(result => setData(result)).catch(error => console.log('error', error));
  }, [isModalOpen,isModalOpen1])

       console.log(typeof(data)
        );
 

 
   
  return (
    <>
      {isModalOpen&&<UpdateModal isOpen={isModalOpen}
        onClose={closeModal} dataState={dataUpdate} />}
        {isModalOpen1&&<DeleteModal isOpen={isModalOpen1}
        onClose={closeModal1} dataState={dataUpdate} />}


<div className="container-fluid">
       
       <div className="py-5">
         <div className="container">
           <div className=" card  p-2 text-center">
             <div className="d-flex justify-content-around align-items-center">
               <div>
                 {/* <form className="d-flex" role="search" onSubmit={handleOnSearchClick}> */}
       {/* <input className="form-control me-2" type="search" placeholder="Search" value={searchFor} aria-label="Search" onChange={handleOnSearch}/> */}
       {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
     {/* </form> */}
     </div>
               <h1>Stock</h1>
               {/* <Link to="/Add"><button type="submit"  className="btn btn-primary ml-auto">Add Product</button></Link> */}
             </div>
             <hr />
             <div style={{overflow:"auto" , height:"70vh"}}>
             <table className="table w-11/12	">
               <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Name</th>
                   <th scope="col">Color</th>
                   <th scope="col">39</th>
                   <th scope="col">40</th>
                   <th scope="col">41</th>
                   <th scope="col">42</th>
                   <th scope="col">43</th>
                   <th scope="col">44</th>
                   <th scope="col">45</th>
                   <th scope="col">SKU</th>
                 </tr>
               </thead>
               <tbody>
                 {data===undefined?<div>
                   Data is loading
                 </div>:
                 data.map((p, i) => {
                   return (
                     <tr key={p.id}>
                       <th scope="row">{p.id}</th>
                       <td>{p.Name}</td>
                       <td>{p.Color}</td>

                       <td>{p.size39}</td>
                       <td>{p.size40}</td>
                       <td>{p.size41}</td>
                       <td>{p.size42}</td>
                       <td>{p.size43}</td>
                       <td>{p.size44}</td>
                       <td>{p.size45}</td>
                       <td>{Number(p.size39)+Number(p.size40)+Number(p.size41)+Number(p.size42)+Number(p.size43)+Number(p.size44)+Number(p.size45)}</td>

                       <td>
                         <button
                           className="btn btn-sm btn-info me-2"
                           // data-bs-toggle="modal"
                           // data-bs-target="#editModal"
                           onClick={() => {
                             updateHandle(p)
                           }}
                         >
                           Update
                         </button>
                         <button
                           className="btn btn-sm btn-danger"
                           onClick={() => {
                             deleteHandle(p);
                           }}
                         >
                           Delete
                         </button>
                       </td>
                     </tr>
                   );
                 })
                 }
               </tbody>
             </table>
             </div>
             

             
         

           </div>
         </div>
       </div>
     </div> 
    </>
   
  )
}
