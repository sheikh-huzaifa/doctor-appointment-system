import React, { useState } from 'react'
import PropTypes from 'prop-types'

const addModal = props => {
    const [state, setState] = useState(initialeState);
// Initial state of the form
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


  const handleOnChange = (e) => {
     setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleOnClick = (e) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Name": `${state.Name}`,
  "Color": `${state.Color}`,
  "size39": state.size39,
  "size40": state.size40,
  "size41": state.size41,
  "size42": state.size42,
  "size43": state.size43,
  "size44": state.size44,
  "size45": state.size45,
  "CP": state.CP,
  "SP": state.SP
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
                    <h2>{text}</h2>
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
                        name="name"
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
                        name="color"
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

                    <div className="col-1">
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

                    <div
                      className="col-6
            "
                    >
                      <div className="row">
                        <div className="col">
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

                        <div className="col">
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

                        <div className="col">
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

                        <div className="col">
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
                        <div className="col">
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

                        <div className="col">
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

                        <div className="col">
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
                  </div>

                  <button className={`btn btn-outline-success w-50 my-4 `}>
                    {btnText}
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

addModal.propTypes = {}

export default addModal