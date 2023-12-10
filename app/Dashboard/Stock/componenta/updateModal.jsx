import React, { useState } from 'react'
import PropTypes from 'prop-types'


const updateModal = ({isOpen , onClose ,dataState}) => {
    const modalClass = isOpen ? "modal show" : "modal";
    const [state,setState]= useState(dataState)
    console.log("isOpen",isOpen);
    const customStyles = {
        // Other styles here
        "--bs-bg-opacity": ".5",
        height: "100vh",
      };
    const handleOnChange = (e)=>{
        setState({...state , [e.target.name] : e.target.value})
    }
    const HandleOnClick = (e)=>{
        e.preventDefault();
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": `${state.id}`,
  "size39": Number(state.size39),
  "size40": Number(state.size40),
  "size41": Number(state.size41),
  "size42": Number(state.size42),
  "size43": Number(state.size43),
  "size44": Number(state.size44),
  "size45": Number(state.size45),
  "CP": Number(state.CP),
  "SP": Number(state.SP)
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/Stocks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    return (
    
        <div
        className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: isOpen ? "block " : "none" }}
      >
        <div
          className="container-fluid modal-dialog-centered bg-dark"
          style={customStyles}
        >
          <div className="container ">
            <div className="row">
              <div className="col-8 offset-2 ps-5">
                <div className="modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header ">
                      <h5 className="modal-title">Add stockTake</h5>
                      <button
                        type="button"
                        className="close"
                        onClick={onClose}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body d-flex-sm">
                        {/* Label */}
                        <div className="row text-center">
                        <div className="col-1 fw-bold">Name</div>
                         
                        <div className="col-2   ">CP</div>
                        <div className="col-2 ">SP</div>
                            <div className="col-1 ">39</div>
                            <div className="col-1">40</div>
                            <div className="col-1">41</div>
                            <div className="col-1">42</div>
                            <div className="col-1">43</div>
                            <div className="col-1">44</div>
                            <div className="col-1">45</div>
                         
                        </div>
                        {/* Inputs */}
                        <div className="row mt-2">
                        <div className="col-1 fw-bold text-xs	">
                        {state.Name}   <br />                  
                        {state.Color}
                      
                    </div>

                     

                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="0 "
                        name="CP"
                        value={state.CP}
                        required
                        className="form-control productFormInputThird"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="0 "
                        name="SP"
                        value={state.SP}
                        required
                        className="form-control productFormInputThird"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size39"
                            value={state.size39}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size40"
                            value={state.size40}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size41"
                            value={state.size41}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size42"
                            value={state.size42}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>
                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size43"
                            value={state.size43}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size44"
                            value={state.size44}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="0 "
                            name="size45"
                            value={state.size45}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>
                        </div>
                     </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onClose}
                      >
                        Close
                      </button>
                      
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e)=>{HandleOnClick(e)}}
                      >
                        <span onClick={onClose}>Update Stock</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

updateModal.propTypes = {}

export default updateModal