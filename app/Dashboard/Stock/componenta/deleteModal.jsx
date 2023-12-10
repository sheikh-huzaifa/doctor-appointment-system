import React from 'react'
import PropTypes from 'prop-types'

const deleteModal = ({isOpen , onClose ,dataState})  => {
    const modalClass = isOpen ? "modal show" : "modal";
    const [state,setState]= React.useState(dataState)
    console.log("isOpen",isOpen);
    const customStyles = {
        // Other styles here
        "--bs-bg-opacity": ".5",
        height: "100vh",
      };
    
    const HandleOnClick = (e)=>{
        e.preventDefault();
        
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": `${state.id}`
});

var requestOptions = {
  method: 'DELETE',
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
                <div className="modal-header text-center">
                   <h3>Confirmation</h3>
                </div>
                <div className="modal-body d-flex-sm">
                   Do you want to delect this Article ({state.id})
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
                    className="btn btn-danger"
                    onClick={(e)=>{HandleOnClick(e)}}
                  >
                    <span onClick={onClose}>Sure</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

deleteModal.propTypes = {}

export default deleteModal