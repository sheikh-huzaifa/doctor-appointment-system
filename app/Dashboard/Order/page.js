"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const initialeState = {
    Name: "",
    Color: "",
    size39: 0,
    size40: 0,
    size41: 0,
    size42: 0,
    size43: 0,
    size44: 0,
    size45: 0,
    CP: 0,
    SP: 0,
  };

const page = props => {
    const [state, setState] = useState(initialeState);
// Initial state of the form
   
  

  const handleOnChange = (e) => {
     setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleOnClick = (e) => {
    e.preventDefault();

    Object.values(state).map((x)=>{console.log(`${x} -- ${typeof(x)}`);})
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Name": `${state.Name}`,
  "Color": `${state.Color}`,
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
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/Stocks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  setState(initialeState)
  };

  return (
    <div className="container-fluid">
      <div className="py-5">
        <div className="container">
          <div className="col-12 col-md-12 mx-md-3 col-lg-12 mx-lg-2">
            <div className="card cardCustom p2- p-md-3 p-lg-5">
              <form
                action="text-center"
                onSubmit={(e) => {
                  handleOnClick(e);
                }}
              >
                <div className="text-center">
                  <div className="text-center">
                    <h2>Add Stock</h2>
                  </div>
                  <div className="row text-center mt-4">
                    <div className="col-2">Name</div>
                    <div className="col-2">Color</div>
                    <div className="col-1">CP</div>
                    <div className="col-1">SP</div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col">39</div>
                        <div className="col">40</div>
                        <div className="col">41</div>
                        <div className="col">42</div>
                        <div className="col">43</div>
                        <div className="col">44</div>
                        <div className="col">45</div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="Name"
                        value={state.Name}
                        name="Name"
                        required
                        className="form-control productFormInputMain"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="Color"
                        name="Color"
                        value={state.Color}
                        required
                        className="form-control productFormInputSecondary"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div className="col-1">
                      <input
                        type="number"
                         
                        name="CP"
                        value={state.CP}
                        required
                        className="form-control productFormInputThird"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div className="col-1">
                      <input
                        type="number"
                         name="SP"
                        value={state.SP}
                        required
                        className="form-control productFormInputThird"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      />
                    </div>

                    <div
                      className="col-6
            "
                    >
                      <div className="row">
                        <div className="col">
                          <input
                            type="number"
                             name="size39"
                            value={state.size39}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col">
                          <input
                            type="number"
                             name="size40"
                            value={state.size40}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col">
                          <input
                            type="number"
                             name="size41"
                            value={state.size41}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col">
                          <input
                            type="number"
                             name="size42"
                            value={state.size42}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="number"
                             name="size43"
                            value={state.size43}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col">
                          <input
                            type="number"
                             name="size44"
                            value={state.size44}
                            className="form-control productFormInputThird"
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>

                        <div className="col">
                          <input
                            type="number"
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
                  </div>

                  <button className={`btn btn-outline-success w-50 my-4 `}>
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

 
export default page